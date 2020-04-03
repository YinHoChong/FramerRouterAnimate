import * as React from "react";
import { Frame, addPropertyControls, ControlType, Scroll } from "framer";
import styled from "styled-components";
import { MainNavigation } from "../../components/MainNavigation";

// Open Preview: Command + P
// Learn more: https://framer.com/api

const viewPortWidth = window.innerWidth;

const HomeWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
});

const Gallery = styled.div({
  ...autoGrid(230, 15),
});

const Image = styled.img({
  width: "100%",
  objectFit: "cover",
  borderRadius: 10,
  boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
});
// const Image = styled.img`
//   width: 100%;
//   object-fit: cover;
//   border-radius: 10;
//   box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
// `;

export function Home() {
  const randomImages = Array.from({ length: 50 });
  return (
    <>
      {/* <MainNavigation /> */}
      <Scroll width={"100%"} height={"100%"}>
        <Frame />
        <HomeWrapper>
          <h3> CSS Grid rocks toto </h3>
          <Gallery>
            {randomImages.map((_, i) => (
              <Image key={i} src={`https://picsum.photos/id/${i}/640/480`} />
            ))}
          </Gallery>
          {/* <Scroll height={200} width={"100%"}>
        <Frame size={300}>Hello World!</Frame>
      </Scroll> */}
        </HomeWrapper>
      </Scroll>
    </>
  );
}

// Home.defaultProps = {
//   height: 128,
//   width: 240,
//   text: "Get started!",
//   tint: "#0099ff"
// };

// // Learn more: https://framer.com/api/property-controls/
// addPropertyControls(Home, {
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
