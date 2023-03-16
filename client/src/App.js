import "./App.css";
import NavComp from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import List from "./pages/List";
import Squad from "./pages/squad";
function App() {
  return (
    <>
      <NavComp />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/list" element={<List />} />
          <Route path="/squad" element={<Squad />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
