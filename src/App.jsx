import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navigation from "./Components/Navigation";
import About from "./Components/Pages/About/About";
import Service from "./Components/Pages/Services/Service";
import Work from "./Components/Pages/Work/Work";
import Career from "./Components/Pages/Career/Career";
import Contact from "./Components/Pages/Contact/Contact";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer/Footer";
import MainRoute from "./Components/Pages/Services/routing/MainRoute";
import WorkRoute from "./Components/Pages/Work/DescriptionWOrk/WorkRoute";
import CareerRoute from "./Components/Pages/Career/CareerRouting/CareerRoute";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:slug" element={<MainRoute />} />
          <Route path="/works" element={<Work />} />
          <Route path="/works/:slug" element={<WorkRoute />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:slug" element={<CareerRoute />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
