import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import About from "./components/pages/about"
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import './App.scss';


function App() {
  return (
      <div className="App">
          <Router>
              <Navbar/>
              <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/projects" element={<Projects/>}/>
                  <Route path="/about" element={<About/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
