// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite, Code,
  Deck,
  Heading,
  ListItem,
  List, Link,
  Quote,
  Image,
  Slide,
  Text,
  Layout, S, Spectacle,
  Fit, Fill, Markdown, Appear, MarkdownSlides
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import { CsSlide, CsHeading } from './theme'
import { Arrow } from './Arrow';
import { CenteredFill } from './CenteredFill';

import toolsMd from './tools.md';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const travisCode = require("raw-loader!../assets/travis.example.yml");
//const travisCode = require("raw-loader!./Arrow.js");

console.log(travisCode);

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  coding: require("../assets/coding_house.gif"),
  awesome: require('../assets/awesome.gif'),
  heroku: require('../assets/Heroku-01.png'),
  github: require('../assets/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png'),
  travis: require('../assets/Travis.png'),
  architecture: require('../assets/diagrams.svg'),
  typescript: require('../assets/typescript.svg'),
  build: require('../assets/diagrams-build.svg'),
  process: require('../assets/diagrams-process.svg'),
  herokuDashboard: require('../assets/heroku.png'),
  herokuSettings: require('../assets/heroku-settings.png'),
  labsLogo: require('../assets/logo-consol-labs.png')
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

const styles = {
  centeredContent: { alignItems: 'center', display: 'flex', justifyContent: 'center' }
}

console.log(theme);
// Docs: http://formidable.com/open-source/spectacle/docs
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
          <Slide transition={["zoom"]} bgColor="background" >
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Release it!
          </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Continuous deployment for everyone
          </Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="background" >
            <Heading size={4} textColor="secondary" caps>You developed something cool...</Heading>
            <Image src={images.coding} />
            <Appear>
              <Heading size={4} textColor="secondary" caps>...and now you want to publish it</Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" textColor="tertiary">
            <Heading size={4} textColor="secondary" caps>The Challenge?</Heading>
            <Layout>

                <Fill>
                  <Heading size={5} textColor="secondary">
                    <span style={{ color: theme.screen.colors.quartenary }}>{`{ }`}</span> Your Code
              </Heading>
                  <List>
                    <ListItem>Local</ListItem>
                    <ListItem>Text files</ListItem>
                    <ListItem>Editable</ListItem>
                  </List>
                </Fill>
          
                <Fill>
                  <Heading size={5} textColor="secondary">
                    <span style={{ color: theme.screen.colors.quartenary }}>&gt;_</span> Running App
              </Heading>
                  <List>
                    <ListItem>Hosted</ListItem>
                    <ListItem>Packaged</ListItem>
                    <ListItem>Executable</ListItem>
                  </List>
                </Fill>

            </Layout>
            <Appear>
              <Text textColor="quartenary">How to get there? <br />
                <Arrow width={300} height={30} length={30} lineStyle={{
                  fill: theme.screen.colors.secondary,
                  strokeWidth: 0
                }} style={{ marginTop: '20px' }} />
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="background">
            <Heading textColor="secondary" size={4} caps>Considerations</Heading>
            <Text textColor="tertiary">Code must be ...</Text>
            <List textColor="tertiary">
              <ListItem>...(compiled)</ListItem>
              <ListItem>...tested</ListItem>
              <ListItem>...packaged</ListItem>
              <ListItem>...deployed / uploaded</ListItem>
            </List>
            <Text textColor="quartenary">Can we automate this?</Text>
          </Slide>
          {/*TODO: Finde des dauert dann fast zu lang bis wir zum Fleisch kommen - evtl Tonspur?*/}
          {/*<Slide transition={["fade"]} bgColor="secondary">*/}
            {/*<BlockQuote >*/}
              {/*<Quote>*/}
                {/*Continuous integration is a [...] practice where members of a team integrate their work frequently [...].*/}
            {/*</Quote>*/}
              {/*<Cite>*/}
                {/*<Link href="https://www.martinfowler.com/articles/continuousIntegration.html">Martin Fowler</Link>*/}
              {/*</Cite>*/}
            {/*</BlockQuote>*/}
          {/*</Slide>*/}
          {/*<Slide transition={["fade"]} bgColor="secondary">*/}
            {/*<BlockQuote >*/}
              {/*<Quote>*/}
                {/*[...] integration is <i>verified</i> by an <i>automated build</i> (including <i>test</i>) to detect integration errors [...].*/}
            {/*</Quote>*/}
              {/*<Cite>*/}
                {/*<Link href="https://www.martinfowler.com/articles/continuousIntegration.html">Martin Fowler</Link>*/}
              {/*</Cite>*/}
            {/*</BlockQuote>*/}
          {/*</Slide>*/}
          <Slide transition={["fade"]} bgColor="background">
            <Heading size={4} textColor="secondary" caps>General Pipeline</Heading>
            <Text size={5} textColor="secondary" textAlign="left">
              <span style={{ color: theme.screen.colors.quartenary }}>{`{ }`}</span> Your Code <br />              
                <Text margin={15}>
                  <Arrow width={30} height={30} style={{ marginLeft: 50 }} rotation={90} lineStyle={{
                    fill: theme.screen.colors.secondary,
                    strokeWidth: 0
                  }} />
                </Text>              
            </Text>
            <Layout margin={15} style={{ height: '25vh' }}>              
                <Fill style={styles.centeredContent} className="test">
                  <Text textColor="tertiary" textAlign="center">Repository</Text>
                </Fill>
                <Fill style={styles.centeredContent}>
                  <Arrow width={50} height={30} lineStyle={{
                    fill: theme.screen.colors.secondary,
                    strokeWidth: 0
                  }} />
                </Fill>
                <Fill style={styles.centeredContent}>
                  <Text textColor="tertiary" textAlign="center">CI Server</Text>
                </Fill>
                <Fill style={styles.centeredContent}>
                  <Arrow width={50} height={30} lineStyle={{
                    fill: theme.screen.colors.secondary,
                    strokeWidth: 0
                  }} />
                </Fill>
                <Fill style={styles.centeredContent}>
                  <Text textColor="tertiary" textAlign="center">Cloud</Text>
                </Fill>
            </Layout>
            <Text size={5} textColor="secondary" textAlign="right">              
                <Text margin={5}>
                  <Arrow width={30} height={30} rotation={90} lineStyle={{
                    fill: theme.screen.colors.secondary,
                    strokeWidth: 0
                  }} />
                </Text>              
              <br />
              <span style={{ color: theme.screen.colors.quartenary }}>&gt;_</span> Running App
          </Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="background">
            <Heading size={4} textColor="secondary" caps>Example Pipeline</Heading>
            <Text size={5} textColor="secondary" textAlign="left">
              <span style={{ color: theme.screen.colors.quartenary }}>{`{ }`}</span> Your Code <br />
              <Text margin={15}>
                <Arrow width={30} height={30} style={{ marginLeft: 50 }} rotation={90} lineStyle={{
                  fill: theme.screen.colors.secondary,
                  strokeWidth: 0
                }} />
              </Text>
            </Text>
            <Layout margin={15} style={{ height: '25vh' }}>
              <Fill style={styles.centeredContent}>
                <Image style={{ width: '100%' }} src={images.github} />
              </Fill>
              <Fill style={styles.centeredContent}>
                <Arrow width={50} height={30} lineStyle={{
                  fill: theme.screen.colors.secondary,
                  strokeWidth: 0
                }} />
              </Fill>
              <Fill style={styles.centeredContent}>
                <Image style={{ width: '100%' }} src={images.travis} />
              </Fill>
              <Fill style={styles.centeredContent}>
                <Arrow width={50} height={30} lineStyle={{
                  fill: theme.screen.colors.secondary,
                  strokeWidth: 0
                }} />
              </Fill>
              <Fill style={styles.centeredContent}>
                <Image style={{ width: '100%' }} src={images.heroku} />
              </Fill>
            </Layout>
            <Text size={5} textColor="secondary" textAlign="right">
              <Text margin={5}>
                <Arrow width={30} height={30} rotation={90} lineStyle={{
                  fill: theme.screen.colors.secondary,
                  strokeWidth: 0
                }} />
              </Text>
              <br />
              <span style={{ color: theme.screen.colors.quartenary }}>&gt;_</span> Running App
          </Text>
          </Slide>          
          <Slide transition={['slide']}>
            <Heading size={4} textColor="secondary" caps>Awesome Example App</Heading>
            <Layout>
              <Fill style={{ ...styles.centeredContent, textAlign: 'center' }}>
                <iframe src="https://consol-100000000000.herokuapp.com/" style={{
                  border: 'none',
                  width: '50vw',
                  height: '60vh',
                  alignSelf: 'center'
                }} />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={['slide']}>
            <Heading size={4} textColor="secondary" caps>App Architecture</Heading>
            <Image src={images.architecture} />
          </Slide>
          <Slide transition={['slide']}>
            <Heading size={4} textColor="secondary" caps>Local Build</Heading>
            <Code textColor="quartenary">$ npm run build</Code>
            <Image src={images.build} />
            <Markdown>{`
- Aborts on error
- Executable in CI Environment
- All dependencies are defined via __npm__
- __Dist Files__ are the target to deploy
          `}</Markdown>
            {/*TODO 'Dist Files' evtl. grün*/}
          </Slide>
          <Slide transition={['slide']}>
            <Heading size={4} textColor="secondary" caps>Deployment Pipeline</Heading>
            <Image src={images.process} />
          </Slide>
          <CodeSlide
            transition={['slide']}
            lang="yaml"
            code={travisCode}
            ranges={[
              { loc: [0, 0], title: 'Configure Travis' },
              { loc: [0, 3], note: 'Configure the build environment' },
              { loc: [3,7], note: (
                <div>Configure encrypted environment variables<br />
                  Travis CLI provides a helper:<br />
                  <Code textColor="quartenary">$ travis encrypt VAR="content" --add</Code>
                </div>
              )},
              { loc: [8,12], note: 'Prepare and Build'},
              { loc: [9,10], note: 'Install Heroku CLI (required later)'},
              { loc: [10,11], note: 'Run the tests'},
              { loc: [11,12], note: 'Run the build and create dist/ files'},
              { loc: [13,28], note: 'Deploy it!'},
              { loc: [13,19], note: 'Tell Heroku CLI to autheticate headless'},
              { loc: [19,25], note: 'Go to dist/ folder and configure a local, temporary git repo'},
              { loc: [25,28], note: 'Commit and push all contents to Heroku!'},
            ]}
          />
          <Slide transition={['slide']}>                        
              <Link href="https://travis-ci.org/tnobody/2048" target="_blank">
               <Heading size={4} textColor="secondary" caps>Travis in Action</Heading>          
              </Link>            
          </Slide>
          <Slide transition={['slide']}>
            <Heading size={4} textColor="secondary" caps>Heroku Dashboard</Heading>          
            <Layout>
              <Fill> 
                <Link href="https://dashboard.heroku.com/apps/consol-100000000000/" target="_blank">
                  <Image display="flex" src={images.herokuDashboard} />
                </Link>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={['slide']}>
            <Heading size={4} textColor="secondary" caps>Heroku Settings</Heading>          
            <Layout>
              <Fill> 
                <Link href="https://dashboard.heroku.com/apps/consol-100000000000/settings" target="_blank">
                  <Image display="flex" src={images.herokuSettings} />
                </Link>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={['slide']}>
            <Heading size={4} textColor="secondary" caps>Alternatives</Heading>
            <Text textColor="quartenary">Some alternative providers</Text>
            <List>
              {/*TODO Farben sind irgendwie voll krass,lenken fast zu viel vom Inhalt ab*/}
              <ListItem>GitLab: Repo + CI</ListItem>
              <ListItem>
                <Link textColor="tertiary" href="https://developer.github.com/guides/building-a-ci-server/" target="_blank">Custom CI with GitHub Hooks</Link>                
              </ListItem>
              <ListItem>Clouds:&nbsp;
                <Link textColor="tertiary" target="_blank" href="https://www.ctl.io/appfog/">Appfog</Link>,
                <Link textColor="tertiary" target="_blank" href="https://www.cloudfoundry.org"> Cloud&nbsp;Foundry</Link>, 
                <Link textColor="tertiary" target="_blank" href="https://aws.amazon.com/de/free/"> AWS</Link>, 
                <Link textColor="tertiary" target="_blank" href="https://azure.microsoft.com/en-us/services/app-service/web/"> Azure</Link>,
                <Link textColor="tertiary" target="_blank" href="https://cloud.google.com/appengine/">Google&nbsp;App&nbsp;Engine</Link>, many more...
              </ListItem>
            </List>
            <Text textColor="quartenary">The decision depends on your requirements</Text>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={4} textColor="secondary" caps>Summary</Heading>          
            <Markdown>{`
- Deployment and hosting can be free
- Travis can run local build tasks
- You can automate (almost) everything
            `}</Markdown>
            <Text textColor="quartenary">This was only a small start: Find your way and tools &#x1F44D;</Text>
          </Slide>
          <Slide transition={["slide"]}>
            {/*TODO: abschluss slide mit Consol + ConSolLabs Logo bzw. Kontaktdaten wäre gut*/}
            <Heading size={4} textColor="secondary" caps>... more? </Heading>
            <br />
            <Link target="_blank" href="http://labs.consol.de">
              <Image width="40%" display="flex" src={images.labsLogo}/>
            </Link>
          </Slide>
          <Slide transition={["slide"]}>
            {/*TODO: abschluss slide mit Consol + ConSolLabs Logo bzw. Kontaktdaten wäre gut*/}
            <Heading size={4} textColor="secondary" caps>... Job? </Heading><br />
            <Link textColor="tertiary" textSize={50} target="_blank" href="http://dev.consol.de">
              dev.consol.de
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
