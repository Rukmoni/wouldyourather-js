import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './styles.css';

const NewQuestion=({author,question})=>{
    const usersState=useSelector((state)=>state.users);
    const [optionOnePercent,setOptionOnePercent]=useState('0%');
    const [optionTwoPercent,setOptionTwoPercent]=useState('0%');
    console.log("ResultView:",question)
    useEffect(()=>{
        let CountOption1=question.optionOne.votes.length;
        let CountOption2=question.optionTwo.votes.length;
        let votesTotal=CountOption1+CountOption2;
        let percent1=((CountOption1/votesTotal)*100)+"%";
        let percent2=((CountOption2/votesTotal)*100)+"%";
        setOptionOnePercent(percent1);
        setOptionTwoPercent(percent2);

    },[]);

    const handleGoBack=()=>{
        
    }
    return(
        <div className="resultCard">
  <div className="titleBar">
        {author.name} asks
        </div> 
        <div className="pollContainer">
        <div className="avatar">
         <img src={author.avatarURL} alt="Avatar" className="img" />  
        </div>
        <div className="vl"></div>
        <div className="contentBlock">
          <h4>
            <b>Would you rather</b>
          </h4>
          <div className="resultContainer">
         
          <div className="myProgress">
              <div className="myBar" style={{width:`${optionOnePercent}`}}>
                 {optionOnePercent}
              </div>
          </div>
          </div>

          <div className="resultContainer">
          <div className="myProgress">
              <div className="myBar" style={{width:`${optionTwoPercent}`}}>
              {optionTwoPercent}
              </div>
          </div>
          </div>
          <a href="/">back</a>
         
        </div>
        </div> 
        </div>
    )

}

export default NewQuestion;