import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


