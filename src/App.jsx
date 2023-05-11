
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

function App() {
  return (
    <Router>
        <Navbar/>
          <Routes basename ="space-tourism-project/">
           <Route path="space-tourism-project/" element={<Home />} />
           <Route path="space-tourism-project/Destination" element={<Destination />} />
           <Route path="space-tourism-project/Crew" element={<Crew />} />
           <Route path="space-tourism-project/Technology" element={<Technology />} />
          </Routes>
    </Router>
  );
}

export default App;

// import { useEffect } from 'react';

// function App() {

//   useEffect(() => {
//     const body = document.querySelectorAll('body');
//     if (body.path === '/space-tourism-project/Destination') {
//       document.body.className.add('destination');
//     } else if (body.path === '/space-tourism-project/Crew') {
//       document.body.className.add('crew');
//     } else if (body.path === '/space-tourism-project/Technology') {
//       document.body.className.add('technology');
//     }
//   }, []);

//   return (
//     <Router>
//     <body className="home">  
//         <Navbar/>
//           <Routes basename ="space-tourism-project/">
//            <Route path="space-tourism-project/" element={<Home />} />
//            <Route path="space-tourism-project/Destination" element={<Destination />} />
//            <Route path="space-tourism-project/Crew" element={<Crew />} />
//            <Route path="space-tourism-project/Technology" element={<Technology />} />
//           </Routes>
//       </body>  
//     </Router>  
//   );
// }

// export default App;