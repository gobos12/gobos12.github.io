import Header from "./containers/header/Header";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import Education from "./containers/education/Education";
import PreviousProjects from "./containers/prevProjects/PreviousProjects";
import Experience from "./containers/experience/Experience";
import Certificate from "./containers/certificates/Certificates";
import './App.scss';
import CurrentProjects from "./containers/currProjects/CurrentProjects";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="App-Sections">
            <Greeting />
            <PreviousProjects />
            <CurrentProjects />

            <Experience />
            <Education />
            <Certificate />
            <Skills />
        </div>
    </div>
  );
}

export default App;
