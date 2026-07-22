import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import Favourite from './components/Favourite';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [mode, setMode] = useState("light");

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (article) => {
    const exists = favorites.some((fav) => fav.url === article.url);

    let updated;

    if (exists) {
      updated = favorites.filter((fav) => fav.url !== article.url);
    } else {
      updated = [...favorites, article];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

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
        <Route path="/" element={<News mode={mode} category="general" favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/general" element={<News mode={mode} category="general" favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/entertainment" element={<News mode={mode} category="entertainment" favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/sports" element={<News mode={mode} category="sports" favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/health" element={<News mode={mode} category="health" favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/technology" element={<News mode={mode} category="technology" favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/science" element={<News mode={mode} category="science" favorites={favorites} toggleFavorite={toggleFavorite} />} />

        <Route
          path="/favourite"
          element={
            <Favourite
              mode={mode}
              favourites={favorites}
              toggleFavourite={toggleFavorite}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;