
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Destination from './components/Destination';
import Crew from './components/Crew';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Routes basename ="space-tourism-project/">
           <Route path="space-tourism-project/" element={<Home />} />
           <Route path="space-tourism-project/Destination" element={<Destination />} />
           <Route path="space-tourism-project/Crew" element={<Crew />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
