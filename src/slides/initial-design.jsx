import React from "react";
import { theme, template, formidableLogo, initialCodeBlock } from "../theme";
import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
} from "spectacle";

export default class InitialDesign extends React.Component {
  render() {
    return (
      <div>
        <Heading>Initial Design</Heading>
        <Stepper
          defaultValue={[]}
          values={[
            [1, 1],
            [23, 25],
            [40, 42],
          ]}
        >
          {(value, step) => (
            <Box position="relative">
              <CodePane
                highlightStart={value[0]}
                highlightEnd={value[1]}
                fontSize={18}
                language="cpp"
                autoFillHeight
              >
                {initialCodeBlock}
              </CodePane>

              <Box
                position="absolute"
                bottom="0rem"
                left="0rem"
                right="0rem"
                bg="black"
              >
                {/* This notes container won't appear for step 0 */}

                {step === 1 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    This is a note!
                  </Text>
                )}

                {step === 2 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    You can use the stepper state to render whatever you like as
                    you step through the code.
                  </Text>
                )}
              </Box>
            </Box>
          )}
        </Stepper>
        <Text>
          I created the main login container, then added the component files I
          thought were needed. I started with a basic header and form and did
          some basic styling.
        </Text>
      </div>
    );
  }
}