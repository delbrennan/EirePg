import "./styles.css";
import Navbar from "./components/Navbar.js";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
}
