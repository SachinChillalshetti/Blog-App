import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signin';
import About from './pages/About';
import Sports from './pages/Sports';
import Education from './pages/Education';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/sports" element={<Sports />} />
    <Route path="/education" element={<Education />} />
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
