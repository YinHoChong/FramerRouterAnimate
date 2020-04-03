import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import styled from "styled-components";

// import { colors } from "../canvas";

// Open Preview: Command + P
// Learn more: https://framer.com/api

const Card = styled.div`
  color: white;
  padding: 24px;
  // width: 208px;
  height: 308px;
  overflow: visible;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 1;
  background: rgba(37, 37, 37, 0.5);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  // box-shadow: 0px 1px 3px 0px #d3e0ee;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-7px);
    // box-shadow: 0 2px 7px rgb(211, 224, 238);
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  //

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 60px;
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: auto;

  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 150px;
  margin-bottom: 16px;
`;

const Owner = styled.div`
  font-size: 13px;
  // align-self: flex-end;
  //
`;

export function CardDp({
  title = "Title goes here",
  description = "Description goes here",
  owner = "Owner"
}) {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Owner>{owner}</Owner>
    </Card>
  );
}

CardDp.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff"
};

// Learn more: https://framer.com/api/property-controls/
// addPropertyControls(CardDp, {
//   text: {
//     title: "Text",
//     type: ControlType.String,
//     defaultValue: "Hello Framer!"
//   },
//   tint: {
//     title: "Tint",
//     type: ControlType.Color,
//     defaultValue: "#0099ff"
//   }
// });
