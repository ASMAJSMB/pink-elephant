import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Pochette from "./pages/Pochette";
import Photos from "./pages/Photos";
import Tracklist from "./pages/Tracklist";
import Blog from "./pages/Blog";
import Tournee from "./pages/Tournee";
import ArcadeFire from "./pages/ArcadeFire";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <Sidebar /> {/* ✅ Affiché partout */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/pochette" element={<Pochette />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/tracklist" element={<Tracklist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tournee" element={<Tournee />} />
          <Route path="/arcadefire" element={<ArcadeFire />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;
