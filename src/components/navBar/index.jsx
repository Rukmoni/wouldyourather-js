import React from "react";
import { setAuthedUser} from '../../reduxStore/actions/authUser.actions';
import {useSelector,useDispatch} from 'react-redux';
import "./styles.css";
const NavBar=()=> {
  const authedUser=useSelector((state)=>state.authedUser)
    const dispatch=useDispatch();
    return (
      <div className="nav">
      
        <ul>
        <li>
          <a href="/">DashBoard</a>
        </li>
        <li>
          <a href="/newquestion">NewQuestion</a>
        </li>
        <li>
          <a href="/leaderboard">LeaderBoard</a>
        </li>
        <span className="right">
        <li>
          <p>Welcome!{ ' '} {authedUser}</p>
        </li>
        <li>
        <button className="buttonDark" onClick={()=>{dispatch(setAuthedUser(null))}}>Logout</button>
         
        </li>
        </span>
      </ul>
      </div>
    )
    }

export default NavBar;