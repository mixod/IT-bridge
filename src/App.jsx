import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navigation from "./Components/Navigation";
import About from "./Components/Pages/About/About";
import Service from "./Components/Pages/Services/Service";
import Work from "./Components/Pages/Work/Work";
import Career from "./Components/Pages/Career/Career";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/works" element={<Work />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
