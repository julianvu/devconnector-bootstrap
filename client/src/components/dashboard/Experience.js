import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";

const Experience = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <td className="d-none d-sm-table-cell">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          "Current"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td className="text-center">
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table table-borderless">
        <thead className="thead-light">
          <tr>
            <th>Company</th>
            <th className="d-none d-sm-table-cell">Title</th>
            <th className="d-none d-sm-table-cell">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default connect()(Experience);
