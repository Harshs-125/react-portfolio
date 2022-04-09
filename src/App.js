import "../src/App.css";
import Home from "./Containers/Home/Home";
import "./Containers/Home/home.css";
import About from "./Containers/AboutMe/About";
import Resume from './Containers/Resume/Resume';
import Contact from "./Containers/ContactMe/Contact";
function App() {
  return (
    <div className="App">
      <Home />
      <About  />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
