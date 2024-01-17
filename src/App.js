
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rocket from "./components/Rocket";
import Page404 from "./components/Page404";

function App() {
  return (
    <Router>
      <div className="w-full font-nunito bg-black">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Rocket/:rocketType" element={<Rocket />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
