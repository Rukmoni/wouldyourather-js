import React from "react";
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import "./styles.css";
const QuestionCard=({question})=> {
  const usersState=useSelector((state)=>state.users);
  const history = useHistory();
  console.log(question);
  const author=usersState[question.author];

    return (
      <div className="card">
        <div className="titleBar">
        {question.author} asks
       
        </div>
        <div className="avatar">
          <img src={author.avatarURL} alt="Avatar" className="img" />
        </div>
        <div className="vl"></div>
        <div className="contentBlock">
          <h4>
            <b>Would you rather</b>
          </h4>
          <p>{question.optionOne.text}</p>
          <p>or</p>
       
          <button className="btn" onClick={()=>history.push(`/question/${question.id}`)}> View Poll</button>
         
        </div>
      </div>
    );
 
}

export default QuestionCard;
