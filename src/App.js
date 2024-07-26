import Header from "./containers/header/Header";
import Greeting from "./containers/greeting/Greeting";
import PreviousProjects from "./containers/prevProjects/PreviousProjects";
import CurrentProjects from "./containers/currProjects/CurrentProjects";
import GameJams from "./containers/games/Game";
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="App-Sections">
            <Greeting />
            <CurrentProjects />
            <PreviousProjects />
            <GameJams />
        </div>
    </div>
  );
}

export default App;
