import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="bg-gray-300">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>   
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>}/>   
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>   
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
