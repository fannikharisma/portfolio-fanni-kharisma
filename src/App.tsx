import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
// import HomePage from "./pages/HomePage";
// import AboutMe from "./pages/AboutMe";
// import Projects from "./pages/Projects";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
