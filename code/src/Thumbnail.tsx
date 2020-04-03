import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import styled from "styled-components";

// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Project = styled.div`
  flex: 1 0 3%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.1);
  border-image: initial;

  .project-image img {
    width: 100%;
    height: 100%;
  }
`;

export function Thumbnail(props) {
  const { text, tint, ...rest } = props;

  return (
    <Router>
      <Project>
        <Link to={props.link}>
          <div className="project-image">
            <img src={props.image} alt="Project Image" />
          </div>
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
        </Link>
      </Project>
    </Router>
  );
}

Thumbnail.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff"
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Thumbnail, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Hello Framer!"
  },
  tint: {
    title: "Tint",
    type: ControlType.Color,
    defaultValue: "#0099ff"
  }
});
