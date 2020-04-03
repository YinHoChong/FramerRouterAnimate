import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Thumbnail } from "./Thumbnail";
import styled from "styled-components";
import { Title } from "./Title";
import { MainNavigation } from "./components/MainNavigation";
import { motion, Variants, AnimatePresence } from "framer-motion";

// Open Preview: Command + P
// Learn more: https://framer.com/api

const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export function Projects(props) {
  const { text, tint, ...rest } = props;

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <MainNavigation /> */}
      <Title>Projects</Title>
      {/* <Thumbnails>
        <Thumbnail
          link="/twitter"
          image="https://d33wubrfki0l68.cloudfront.net/491cd9faae7c161b935c4ed683c5bbcf75139e52/9cf41/static/images/wallpapers/playground-01.png"
          title="Twitter Newsfeed"
          category="Mobile App"
        />

        <Thumbnail
          link="/airbnb"
          image="https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png"
          title="Airbnb Experiences"
          category="Website"
        />

        <Thumbnail
          link="/photoshop"
          image="https://d33wubrfki0l68.cloudfront.net/a789ac68a97808307c58d66eb7a9d0d758663364/27961/static/images/wallpapers/bridge-01.png"
          title="Photoshop Redesign"
          category="Desktop App"
        />
      </Thumbnails> */}
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

Projects.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff",
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Projects, {
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
