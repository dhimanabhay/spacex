// import { motion } from "framer-motion";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rocket from "./components/Rocket"; // Assuming you have a RocketList component

function App() {
  return (
    <Router>
      <div className="w-full font-nunito bg-black">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rockets" element={<Rocket />} />
          {/* Add more Route components for other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
