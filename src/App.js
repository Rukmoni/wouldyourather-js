import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {NavBar} from './components';
import Dashboard from './pages/Dashboard';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Router>
     <Route path='/' exact component={Dashboard} />
     <Route path='/leaderboard' component={LeaderBoard} />
      <Route path='/newquestion' component={NewQuestion} />
     </Router>
    </div>
  );
}

export default App;
