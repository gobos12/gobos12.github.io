import Header from "./containers/header/Header";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Skills />
    </div>
  );
}

export default App;
