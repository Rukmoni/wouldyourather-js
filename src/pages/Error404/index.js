import React from "react";
import {useSelector} from 'react-redux';
import "./styles.css";
const Error404 = (props) => {
  const usersState=useSelector((state)=>state.users);
  const questionsState=useSelector((state)=>state.questions);
  const authedState=useSelector((state)=>state.authedUser);
  console.log(props.match.params.id);
  return (
    <div style={{backgroundColor:'red'}}>
      Page Template
    </div>
  );
};

export default Error404;
