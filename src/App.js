import React, { Component, Fragment, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {NavBar} from './components';
import Dashboard from './pages/Dashboard';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';
import { handleInitialData} from './reduxStore/actions/shared.actions';
import './App.css';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(handleInitialData())
  },[])
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
