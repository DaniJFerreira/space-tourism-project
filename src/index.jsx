import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { useLocation } from 'react-router-dom';

// function Root() {
//   const location = useLocation();

//   useEffect(() => {
//     document.body.classList.remove('home');
//     if (location.pathname === '/space-tourism-project/Destination') {
//       document.body.classList.add('destination');
//     } else if (location.pathname === '/space-tourism-project/Crew') {
//       document.body.classList.add('crew');
//     } else if (location.pathname === '/space-tourism-project/Technology') {
//       document.body.classList.add('technology');
//     }
//   }, [location]);

//   return (
//     <body className="home">
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </body>
//   );
// }

// ReactDOM.render(<Root />, document.getElementById('root'));

// // ReactDOM.createRoot(<Root />,document.getElementById('root'));

// reportWebVitals();