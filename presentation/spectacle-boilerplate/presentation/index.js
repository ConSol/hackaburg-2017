// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Image,
  Slide,
  Text,
  Layout,
  Fit, Fill, Markdown, Appear
} from "spectacle";
import {Arrow} from './Arrow';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  coding: require("../assets/coding_house.gif"),
  awesome: require('../assets/awesome.gif')
};

preloader(images);

const theme = createTheme({
  primary: "#white",
  secondary: "#fecc00",
  tertiary: "#159700",
  quartenary: "#828282",
  background: "#151515"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});
console.log(theme);
// Docs: http://formidable.com/open-source/spectacle/docs
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]}transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]}  bgColor="background" >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Release it!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Continious deploymetn for everyone
          </Text>
        </Slide>
        <Slide transition={["fade"]}  bgColor="background" >
          <Heading size={4} textColor="secondary" caps>You developed a nice App...</Heading>
          <Image src={images.coding} />
        </Slide>
        <Slide transition={["fade"]}  bgColor="background" >
          <Heading size={4} textColor="secondary" caps>And you want to show your users the awesomeness</Heading>
          <Image src={images.awesome} />
        </Slide>
        <Slide transition={["slide"]} bgColor="background" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps></Heading>
          <Layout>
            <Fill>
              <Heading size={5} textColor="secondary">
                <Text textColor="quartenary">{`{ }`}</Text> Your Code
              </Heading>
              <List>
                <ListItem>Local</ListItem>
                <ListItem>Textfiles</ListItem>
                <ListItem>Editable</ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={5} textColor="secondary">
                <Text textColor="quartenary">&gt;_</Text> Running App
              </Heading>
              <List>
                <ListItem>Hosted</ListItem>
                <ListItem>Packaged</ListItem>
                <ListItem>Executable</ListItem>
              </List>
            </Fill>
          </Layout>
          <Text textColor="quartenary">How to get there?</Text><br />
          <Arrow width={300} height={30} length={30} lineStyle={{
            fill: theme.screen.colors.secondary,
            strokeWidth: 0
          }} />
        </Slide>
        <Slide transition={["slide"]} bgColor="background">
          <Heading textColor="secondary">Considerations</Heading>
          <Text textColor="tertiary">Code must be ...</Text>
            <List textColor="tertiary">
              <ListItem>...tested</ListItem>
              <ListItem>...compiled, packaged, etc</ListItem>
              <ListItem>...deployed, uploaded</ListItem>
            </List>
          <Text textColor="quartenary">Can we automate this?</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="background">
          <Heading textColor="secondary">Yes we can</Heading>
          <Text>Add short describtion about CI</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="background">
          <Heading size={5} textColor="secondary">
            <Text textColor="quartenary">{`{ }`}</Text> Your Code
          </Heading>
          <Layout textColor="tertiary"> 
            <Appear><Fill>
              <Text textAlign="center">Respository</Text>
            </Fill></Appear>
            <Appear><Fill>
              <Text textAlign="center">CI Server</Text>
            </Fill></Appear>
            <Appear><Fill>
              <Text textAlign="center">Hosting Server / Cloud</Text>
            </Fill></Appear>
          </Layout>
          <Heading size={5} textColor="secondary">
            <Text textColor="quartenary">&gt;_</Text> Running App
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
