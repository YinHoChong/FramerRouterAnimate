import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Title } from "./Title";
import { MainNavigation } from "./components/MainNavigation";
import { motion, Variants, AnimatePresence } from "framer-motion";

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function About(props) {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <MainNavigation /> */}
      <Title>About</Title>
    </motion.div>
    // <Frame
    //     {...rest}
    //     background={tint}
    //     whileHover={{
    //         scale: 1.1,
    //     }}
    //     style={{
    //         color: "#fff",
    //         fontSize: 16,
    //         fontWeight: 600,
    //     }}
    // >
    //     {text}
    // </Frame>
  );
}

About.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff",
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(About, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Hello Framer!",
  },
  tint: {
    title: "Tint",
    type: ControlType.Color,
    defaultValue: "#0099ff",
  },
});
