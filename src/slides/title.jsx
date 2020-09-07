import React from "react";
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

export default class Title extends React.Component {
  render() {
    return (
      <FlexBox height="100%">
        <Heading margin="0px" fontSize="150px">
          <i>Design to Reality Project</i>
        </Heading>
      </FlexBox>
    );
  }
}