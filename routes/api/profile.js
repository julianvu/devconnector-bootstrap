const express = require("express");
const auth = require("../../middleware/auth");
const router = express.Router();
const Profile = require("../../models/Profile");
const User = require("../../models/User");

/**
 * @route         GET api/profile/me
 * @description   Get current user's profile
 * @access        private
 */
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    // Check if profile exists
    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no profile for this user." });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("GET api/profile/me - Server Error!");
  }
});

module.exports = router;
