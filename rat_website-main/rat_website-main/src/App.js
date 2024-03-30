import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
// import Package from './pages/Package';
// import Customer from './pages/Customer';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/package" element={<Package />} /> */}
        {/* <Route path='/customer' element={<Customer />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
