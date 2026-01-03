import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout.jsx";
import DashboardLayout from "./Layouts/DashboardLayout.jsx";

import Landing from "./pages/Landing/LandingPage.jsx";
import Contact from "./pages/Landing/contact.jsx";
import About from "./pages/Landing/About.jsx";

import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Dashboard Pages */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
