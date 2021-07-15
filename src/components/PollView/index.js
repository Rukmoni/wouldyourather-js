import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {saveQuestionAnswer} from '../../database/api';
import { setUserAnswer} from '../../reduxStore/actions/users.actions';
import { updateAnswerInQuestion} from '../../reduxStore/actions/questions.actions';
import './styles.css';

const PollView=({author,question})=>{

    const authedUser=useSelector((state)=>state.authedUser);
    const dispatch=useDispatch();

 

    const handleSubmit=async ()=>{
        try{
        let response=await saveQuestionAnswer(authedUser,question.id,"optionOne");
        dispatch(setUserAnswer(authedUser,question.id,"optionOne"))
        dispatch(updateAnswerInQuestion(authedUser,question.id,"optionOne"))
        console.log("response",response);    
    }
        catch(e){
            console.log(e);
        }
        //dispatch(handleUserAnswerUpdate("autheridtest"));
        
    }
    return(
        <div className="resultCard">
  <div className="titleBar">
        {author.name} asks
        </div> 
        <div className="pollContainer">
        <div className="avatartall">
         <img src={author.avatarURL} alt="Avatar" className="img" />  
        </div>
        
        <div className="pollBlock">
          <h4>
            <b>Would you rather</b>
          </h4>
          <p> <input type="radio" value="optionOne" name="option" />{question.optionOne.text}</p>
         
          <p> <input type="radio" value="optionTwo" name="option" />{question.optionTwo.text}</p>
          <button className="buttonCommonWide" onClick={handleSubmit}>Submit</button>
        </div>
        </div> 
        </div>
    )

}

export default PollView;