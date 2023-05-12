
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

function App() {
  return (
    <Router basename ="/" >
        <Navbar/>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Destination" element={<Destination />} />
           <Route path="/Crew" element={<Crew />} />
           <Route path="/Technology" element={<Technology />} />
          </Routes>
    </Router>
  );
}

export default App;
