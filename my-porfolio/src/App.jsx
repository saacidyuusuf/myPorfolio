import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Work from "./pages/work";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
