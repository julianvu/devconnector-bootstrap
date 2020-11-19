import React, { Fragment } from "react";
import styled from "styled-components";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <SpinnerGif src={spinner} alt="Loading..." />
    </Fragment>
  );
};

const SpinnerGif = styled.img`
  width: 200px;
  margin: auto;
  display: block;
`;

export default Spinner;
