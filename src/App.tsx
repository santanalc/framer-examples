import { Box, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AccordionArray } from "./components/Accordion";
import { motion } from "framer-motion";
import GlobalStyles from "./styles/global";
import { Main, Section, Sticky } from "./styles";
import FirstAndSecond from "./components/FirstAndSecond";

// eslint-disable-next-line no-lone-blocks
{
  /* <Box
mt={100}
display="flex"
flexDirection="column"
justifyContent="center"
alignItems="center"
width="100vw"
>
<AccordionArray />
</Box> */
}

// const MotionBox = motion.custom(Box);
function App() {
  return (
    <>
      <GlobalStyles />
      <Main style={{ height: "1610vh", width: "100vw" }}>
        <Section style={{ height: "72.7%" }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: "9.7%" }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}

export default App;
