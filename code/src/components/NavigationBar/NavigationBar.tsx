import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { useState } from "react";
import { motion, MagicMotion } from "framer-motion";
import { screens } from "../../../data/NavigationData";
import styled from "styled-components";

const List = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Box = styled(motion.div)
const ListItem = styled(motion.li)`
  list-style: none;
  padding: 0;
  margin: 0;
  user-select: none;

  font-size: 32px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    font-size: 64px;
`}
`;

const ListItemUnderlined = styled(motion.div)`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: black;
  position: absolute;
  bottom: -4px;
`;

export function NavigationBar() {
  const [selected, setSelected] = useState(0);
  return (
    <MagicMotion>
      <List>
        {screens.map(({ title, color }, i) => (
          <ListItem
            magic
            key={i}
            // className={`title ${i === selected && "selected"}`}
            selected={i === selected}
            style={{ color: i === selected ? color : "#333" }}
            onClick={() => setSelected(i)}
          >
            {i === selected && (
              <ListItemUnderlined
                magicId="underline"
                style={{ backgroundColor: color }}
              />
            )}
            {title}
          </ListItem>
        ))}
      </List>
    </MagicMotion>
  );
}

NavigationBar.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff"
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(NavigationBar, {
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
