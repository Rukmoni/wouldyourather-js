import React from "react";
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import "./styles.css";
const QuestionCard=({question,activeIndex})=> {
  const usersState=useSelector((state)=>state.users);
  const history = useHistory();

  const author=usersState[question.author];

    return (
      <div className="card">
        <div className="questionTitle">
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
       
          <button className={activeIndex===0?"buttonPoll":"buttonViewResult"} onClick={()=>history.push(`/question/${question.id}`)}> {activeIndex===0?"ViewPoll":"View Result"}</button>
         
        </div>
      </div>
    );
 
}

export default QuestionCard;
