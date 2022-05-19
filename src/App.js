import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Login from "./Pages/Login";
function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div> 
  );
}

export default App;
