import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Homepage from "./pages/HomePage.jsx";
import Location from "./pages/Location.jsx";
import About from "./pages/About.jsx";
import PageNonFound from "./pages/PageNonFound.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="location/:id" element={<Location />} />
        <Route path="*" element={<PageNonFound />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
