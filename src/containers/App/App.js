import React from 'react';
import Home from '../../components/Home/Home';
import ReactGA from 'react-ga';



function App() {
  ReactGA.initialize('UA-163877841-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    
          <Home/>  
  );
}

export default App;
