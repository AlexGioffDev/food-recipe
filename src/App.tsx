import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-[#F0ECD0] text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="*" element=<Navigate to="/" replace /> />
        </Routes>
      </div>
    </div>
  );
}

export default App;
