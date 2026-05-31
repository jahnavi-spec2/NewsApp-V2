import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<News key="general" category="general" />} />
        <Route path="/general" element={<News key="general" category="general" />} />
        <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
        <Route path="/sports" element={<News key="sports" category="sports" />} />
        <Route path="/health" element={<News key="health" category="health" />} />
        <Route path="/technology" element={<News key="technology" category="technology" />} />
        <Route path="/science" element={<News key="science" category="science" />} />
      
      
      
      
      
   
      </Routes>
    </Router>
  );
}


export default App;
