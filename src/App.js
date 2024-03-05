import CardContainer from "./components/Card Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<CardContainer/>}/>   
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>}/>   
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
