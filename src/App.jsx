
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Routes basename ="space-tourism-project/">
           <Route path="space-tourism-project/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
