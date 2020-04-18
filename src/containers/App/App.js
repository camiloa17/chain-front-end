import React from 'react';
import Home from '../../components/Home/Home';
import ReactGA from 'react-ga';
import ErrorPage from '../../components/Error/Error';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  ReactGA.initialize('UA-163877841-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='*' component={ErrorPage} />
    </BrowserRouter>
  );
}

export default App;
