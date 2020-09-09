import React from "react";
import { responseCodeBlock } from "../theme";

import "../App.scss";
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

export default class Responsive extends React.Component {
  render() {
    return (
      <div>
        <Heading>Tidying Up</Heading>

        <CodePane fontSize={18} language="css" autoFillHeight="true">
          {responseCodeBlock}
        </CodePane>

        <Heading margin="10px 62px" color="quaternary" fontSize="40px">
          Use chrome dev tools to ensure form is responsive, refactor code,
          tweak styling and update README.
        </Heading>
        <Notes>
          <p>
            Once all of this was in place i worked on styling, refactoring and
            making sure that the page was responsive and mobile friendly. I
            found a CDN for the desired font for the background css styling. I
            have tried to make my code concise and readable, I have also added
            some notes so that my process and thinking is more clear. I
            acknowledge that clean code should not require notes but in this
            instance it is a failsafe!
          </p>
        </Notes>
      </div>
    );
  }
}
