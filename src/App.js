import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes, Route,Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';
import Service from './component/Service';
import About from './component/About';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/service" Component={Service} />
          <Route path="/contact" Component={Contact} />
          <Route path="/" Component={<Navigate replace to="/" />} />
        </Routes>
    <Footer />
    </>
  );
}

export default App;
