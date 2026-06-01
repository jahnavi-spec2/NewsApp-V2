import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {


      const [mode, setMode] = useState("light");
const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "#042743";
    document.body.style.color = "white";
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};
  return (
    <Router>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<News mode={mode} key="general" category="general" />} />
        <Route path="/general" element={<News mode={mode} key="general" category="general" />} />
        <Route path="/entertainment" element={<News mode={mode} key="entertainment" category="entertainment" />} />
        <Route path="/sports" element={<News mode={mode} key="sports" category="sports" />} />
        <Route path="/health" element={<News mode={mode} key="health" category="health" />} />
        <Route path="/technology" element={<News mode={mode} key="technology" category="technology" />} />
        <Route path="/science" element={<News mode={mode} key="science" category="science" />} />
      
      
      
      
      
   
      </Routes>
    </Router>
  );
}


export default App;
