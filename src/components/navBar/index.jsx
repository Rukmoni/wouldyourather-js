import React from "react";
import "./styles.css";
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
      
        <ul>
        <li>
          <a href="/">DashBoard</a>
        </li>
        <li>
          <a href="newquestion">NewQuestion</a>
        </li>
        <li>
          <a href="leaderboard">LeaderBoard</a>
        </li>
        <span className="right">
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        </span>
      </ul>
      </div>
    )
}
}

export default NavBar;