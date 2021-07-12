import React, { Component, Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {NavBar} from './components';
import Dashboard from './pages/Dashboard';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';
import Question from './pages/Question';
import { handleInitialData} from './reduxStore/actions/shared.actions';
import LoadingBar from 'react-redux-loading'
import './App.css';

class App extends Component {
  componentDidMount () {
    const { dispatch, loading } = this.props
    if (loading === true) {
      dispatch(handleInitialData())
    }
  }
  render() {
  return (
   
    <Router>
       <Fragment>
       <LoadingBar />
     <NavBar/>
   {this.props.loading===true?null
   :<div>
     <Route path='/' exact component={Dashboard} />
     <Route path='/question/:id' component={Question}/>

     <Route path='/leaderboard' component={LeaderBoard} />
      <Route path='/newquestion' component={NewQuestion} />
      </div>
   }
     </Fragment>
     </Router>
  
  );
}
}
function mapStateToProps ({ authedUser, users }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
