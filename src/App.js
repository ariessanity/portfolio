import "./App.scss";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Links from "./Components/Links";
import HeaderWrapper from "./Components/HeaderWrapper";
import AboutWrapper from "./Components/AboutWrapper";
import AboutMe from "./Components/AboutMe";
import Stack from "./Components/Stack";
import ProjectWrapper from "./Components/ProjectWrapper";
import Project from "./Components/Project";
import ContactWrapper from "./Components/ContactWrapper";
import Contact from "./Components/Contact";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import ContentWrapper from "./Components/ContentWrapper";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <ContentWrapper>
        <HeaderWrapper>
          <Header />
          <Links />
        </HeaderWrapper>

        <AboutWrapper>
          <AboutMe />
          <Stack />
        </AboutWrapper>

        <ProjectWrapper>
          <Project />
        </ProjectWrapper>

        <ContactWrapper>
          <Contact />
          <Form />
        </ContactWrapper>

        <Footer />
      </ContentWrapper>
    </div>
  );
}

export default App;
