import * as React from "react";
import { Frame, addPropertyControls, ControlType, Scroll } from "framer";
import { Title } from "./Title";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { CardDp } from "../components/CardDp";
import styled from "styled-components";
// import { showNext, showPrevious } from "@framer/steveruizok.flow/code";
import useStore from "../utils/store";
import { MainNavigation } from "./components/MainNavigation";

// Open Preview: Command + P
// Learn more: https://framer.com/api

const DpWrapper = styled.div`
  // margin: 24px;
`;

const CardsList = styled(motion.div)`
  display: flex;
  flex-direction: row;
  // justify-content: center;
  justify-content: flex-start;
//   align-items:center;
  padding: 0;
  // margin: 0 24px 0 24px;
  list-style: none;
  flex-wrap: wrap;
  }
`;

const CardItem = styled(motion.div)`
  // margin: 0 8px 0 8px;
  min-width: 208px;
  // max-width: 308px;
  margin: 8px;
  // flex: 1 1 0;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 0;
  z :first-child {
    // margin: 0px 8px 0 0;
    margin: 8px;
  }

  :last-child {
    // margin: 0px 0px 0 8px;
    margin: 8px;
  }
`;

const list = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

export function Articles() {
  /// STORE HOIKS
  const [store, setStore] = useStore();
  // console.log(store);

  return (
    <motion.div key="articles">
      {/* <MainNavigation /> */}
      <Scroll width={"100%"} height={"100%"}>
        <Frame style={{ background: "none" }}>
          <DpWrapper>
            <Title>Articles</Title>
            <CardsList
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >
              {store.digitalProducts.map((section, i) => (
                <CardItem variants={thumbnailVariants} key={section.id}>
                  <CardDp
                    title={section.title}
                    owner={section.owner}
                    description={section.description}
                  />
                </CardItem>
              ))}
            </CardsList>
          </DpWrapper>
        </Frame>
      </Scroll>
    </motion.div>
  );
}

Articles.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff",
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Articles, {
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
