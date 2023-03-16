import "./App.css";
import NavComp from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavComp />
      <div className="App">hello squad </div>
      <Footer />
    </>
  );
}

export default App;
