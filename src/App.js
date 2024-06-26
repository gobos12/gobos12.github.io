import Header from "./containers/header/Header";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import Education from "./containers/education/Education";
import Projects from "./containers/projects/Projects";
import Experience from "./containers/experience/Experience";
import Certificate from "./containers/certificates/Certificates";
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <Greeting />
        <Experience />
        <Education />
        <Skills />
        <Certificate />
        <Projects />
    </div>
  );
}

export default App;
