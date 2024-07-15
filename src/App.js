import Header from "./containers/header/Header";
import Greeting from "./containers/greeting/Greeting";
import PreviousProjects from "./containers/prevProjects/PreviousProjects";
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
        </div>
    </div>
  );
}

export default App;
