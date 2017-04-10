// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List, Link,
  Quote,
  Image,
  Slide,
  Text,
  Layout, S,
  Fit, Fill, Markdown, Appear, MarkdownSlides
} from "spectacle";
import {CsSlide, CsHeading} from './theme'
import {Arrow} from './Arrow';

import toolsMd from './tools.md';

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
  awesome: require('../assets/awesome.gif'),
  heroku: require('../assets/Heroku-01.png'),
  github: require('../assets/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png'),
  travis: require('../assets/Travis.png')
};

preloader(images);

const theme = createTheme({
  primary: "#151515",
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
            Continious deployment for everyone
          </Text>
        </Slide>
        <Slide transition={["fade"]}  bgColor="background" >
          <Heading size={4} textColor="secondary" caps>You developed a nice App...</Heading>
          <Image src={images.coding} />
        </Slide>
        <Slide transition={["fade"]}  bgColor="background" >
          <Heading size={4} textColor="secondary" caps>...and you want to show your users the awesomeness</Heading>
          <Image src={images.awesome} />
        </Slide>
        <Slide transition={["slide"]} bgColor="background" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps></Heading>
          <Layout>
            <Fill>
              <Heading size={5} textColor="secondary">
                <span style={{color: theme.screen.colors.quartenary}}>{`{ }`}</span> Your Code
              </Heading>
              <List>
                <ListItem>Local</ListItem>
                <ListItem>Textfiles</ListItem>
                <ListItem>Editable</ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={5} textColor="secondary">
                <span style={{color: theme.screen.colors.quartenary}}>&gt;_</span> Running App
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
          <Heading textColor="secondary" size={4}>Considerations</Heading>
          <Text textColor="tertiary">Code must be ...</Text>
            <List textColor="tertiary">
              <ListItem>...tested</ListItem>
              <ListItem>...compiled, packaged, etc</ListItem>
              <ListItem>...deployed, uploaded</ListItem>
            </List>
          <Text textColor="quartenary">Can we automate this?</Text>
        </Slide>
        <Slide transition={[ "fade"]} bgColor="secondary">
          <BlockQuote >
            <Quote>
            Continuous integration is a [...] practice where members of a team integrate their work frequently [...]. 
            </Quote>
            <Cite>
              <Link href="https://www.martinfowler.com/articles/continuousIntegration.html">Martin Fowler</Link>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <BlockQuote >
            <Quote>
            [...] integration is <i>verified</i> by an <i>automated build</i> (including <i>test</i>) to detect integration errors [...].
            </Quote>
            <Cite>
              <Link href="https://www.martinfowler.com/articles/continuousIntegration.html">Martin Fowler</Link>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="background">
          <Text size={5} textColor="secondary" textAlign="left">
            <span style={{color: theme.screen.colors.quartenary}}>{`{ }`}</span> Your Code <br />
            <Appear>
              <Text margin={15}>
                <Arrow width={30} height={30} style={{marginLeft:50}} rotation={90} lineStyle={{ fill: theme.screen.colors.secondary,
                  strokeWidth: 0}} />
              </Text>
            </Appear>
          </Text>
          <Layout margin={15} style={{height:'25vh'}}> 
            <Appear>
              <Fill>
                <Text  textColor="tertiary" textAlign="center">Respository</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Arrow width={50} height={30} lineStyle={{ fill: theme.screen.colors.secondary,
            strokeWidth: 0}} />
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Text textColor="tertiary" textAlign="center">CI Server</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Arrow width={50} height={30} lineStyle={{ fill: theme.screen.colors.secondary,
            strokeWidth: 0}} />
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Text textColor="tertiary" textAlign="center">Cloud</Text>
              </Fill>
            </Appear>
          </Layout>
          <Text size={5} textColor="secondary" textAlign="right">
            <Appear>
              <Text margin={5}>
                <Arrow width={30} height={30} rotation={90} lineStyle={{   fill: theme.screen.colors.secondary,
                strokeWidth: 0}} />
              </Text> 
            </Appear>
            <br />
            <span style={{color: theme.screen.colors.quartenary}}>&gt;_</span> Running App
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="background">
          <Text size={5} textColor="secondary" textAlign="left">
            <span style={{color: theme.screen.colors.quartenary}}>{`{ }`}</span> Your Code <br />
              <Text margin={15}>
                <Arrow width={30} height={30} style={{marginLeft:50}} rotation={90} lineStyle={{ fill: theme.screen.colors.secondary,
                  strokeWidth: 0}} />
              </Text>
          </Text>
          <Layout margin={15} style={{height:'25vh'}}> 
              <Fill>
                <Image style={{width:'15vw'}} src={images.github} />
              </Fill>
              <Fill>
                <Arrow width={50} height={30} lineStyle={{ fill: theme.screen.colors.secondary,
            strokeWidth: 0}} />
              </Fill>
              <Fill>
                <Image style={{width:'15vw'}} src={images.travis} />
              </Fill>
              <Fill>
                <Arrow width={50} height={30} lineStyle={{ fill: theme.screen.colors.secondary,
            strokeWidth: 0}} />
              </Fill>
              <Fill>
                <Image style={{width:'15vw'}} src={images.heroku} />
              </Fill>
          </Layout>
          <Text size={5} textColor="secondary" textAlign="right">
              <Text margin={5}>
                <Arrow width={30} height={30} rotation={90} lineStyle={{   fill: theme.screen.colors.secondary,
                strokeWidth: 0}} />
              </Text> 
            <br />
            <span style={{color: theme.screen.colors.quartenary}}>&gt;_</span> Running App
          </Text>
        </Slide>
        <Slide transition={['slide']}>
          <Markdown>{`
## Github
- Collaborative Development
- Development Processes (GitFlow)
- Free for **open** projects
- more...
          `}</Markdown>
        </Slide>
        <Slide transition={['slide']}>
          <Markdown>{`
## Travis
- CI Server
- Free for GitHub Projects
          `}</Markdown>
        </Slide> 
        <Slide transition={['slide']}>
          <Markdown>{`
## Heroku
- Cloud platform
- Hosted Apps in the cloud
- Supports many languages
- Other services like database available
          `}</Markdown>
        </Slide>
        <Slide transition={["slide"]}>
          <Markdown>{`
## What we are going to deploy?
- React based app
- Express (NodeJs) server
- Database dependency
- Bundled with Webpack
- Two Artifacts for server and client
          `}</Markdown>
        </Slide>
      </Deck>
    );
  }
}
