import React, { Component, Fragment} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {NavBar} from './components';
import Dashboard from './pages/Dashboard';
import LeaderBoard from './pages/LeaderBoard';
import NewQuestion from './pages/NewQuestion';
import Question from './pages/Question';
import Login from './pages/LoginNew';
import { handleInitialData} from './reduxStore/actions/shared.actions';
import LoadingBar from 'react-redux-loading'
import './App.css';
import './constants/CSS-vars.css';

class App extends Component {
  componentDidMount () {
    const { dispatch, loading } = this.props

    if(!loading){
      dispatch(handleInitialData())
    }
    
  }
  render() {
    const {authedUser,users}=this.props;

    if(users===null){
      return <div/>
    } 
  return (
   <div className="Appbody">
    <Router>
       <Fragment>
       <LoadingBar />
       
   {authedUser===null?
   <div><Login users={users}/></div>
   :<div>
   <NavBar/>
     <Route path='/' exact component={Dashboard} />
     <Route path='/question/:id' component={Question}/>

     <Route path='/leaderboard' component={LeaderBoard} />
      <Route path='/add' component={NewQuestion} />
      </div>
   }
     </Fragment>
     </Router>
     </div>
  );
}
}
function mapStateToProps ({ authedUser, users }) {

  return {
    loading:users===null,
    
    authedUser,
    users
  }
}
export default connect(mapStateToProps)(App)
