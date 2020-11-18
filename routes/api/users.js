const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); // Great library for validating inputs
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../../models/User");

/**
 * @route         POST api/users
 * @description   Register user
 * @access        public
 */
router.post(
  "/",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Get gravatar of user
      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

      // Create user object (password is not yet encrypted)
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(password, salt);

      // Return JWT
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            throw err;
          } else {
            res.json({ token });
          }
        }
      );

      await user.save(); // Save user into database
    } catch (err) {
      console.error(err.message);
      res.status(500).send("POST /api/users - Server Error!");
    }
  }
);

module.exports = router;
