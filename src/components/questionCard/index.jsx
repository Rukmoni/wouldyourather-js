import React from "react";
import "./styles.css";
class QuestionCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="titleBar">
        John
       
        </div>
        <div className="avatar">
          <img src="img_avatar.png" alt="Avatar" className="img" />
        </div>
        <div className="vl"></div>
        <div className="contentBlock">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
          <div className="btn">View Poll</div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
