import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  return (
     <div className={darkMode ? "dark-mode" : ""}>
    <BrowserRouter>
      <Navbar
        search={search}
        setSearch={setSearch}
        setSelectedCategory={setSelectedCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="layout">
     <Sidebar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

        <Routes>
          <Route
            path="/"
            element={
              <Home
              search={search}
              selectedCategory={selectedCategory}
              />
            }
          />

          <Route
            path="/video/:id"
            element={<VideoPlayer />}
          />
        </Routes>
      </div>
        <footer className="footer">
          © 2026 YouTube Clone
       </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;