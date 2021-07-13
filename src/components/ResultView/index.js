import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './styles.css';

const Badge=()=>{
    return(
        <div class="wrapper">
        <div class="ribbon-wrapper-red">
          <div class="ribbon-red">You</div>
        </div>
        </div>

    )
};

const ResultView=({author,question})=>{
    const usersState=useSelector((state)=>state.users);
    const [optionOnePercent,setOptionOnePercent]=useState('0%');
    const [optionTwoPercent,setOptionTwoPercent]=useState('0%');
    const [yourVote,setYourVote]=useState('');
    console.log("ResultView:",question)
    useEffect(()=>{
        let CountOption1=question.optionOne.votes.length;
        let CountOption2=question.optionTwo.votes.length;
        let votesTotal=CountOption1+CountOption2;
        let percent1=((CountOption1/votesTotal)*100)+"%";
        let percent2=((CountOption2/votesTotal)*100)+"%";
        let _yourVote=author.answers[question.id];
        setYourVote(_yourVote);
        console.log("_yourVote::",_yourVote)
        setOptionOnePercent(percent1);
        setOptionTwoPercent(percent2);

    },[]);

 
    return(
        <div className="resultCard">
  <div className="titleBar">
        {author.name} asks
        </div> 
        <div className="pollContainer">
        <div className="avatartall">
         <img src={author.avatarURL} alt="Avatar" className="img" />  
        </div>
        <div className="divider"></div>
        <div className="contentBlock">
        <h3>
            <b>Results:</b>
          </h3>
          <h4>
            <b>Would you rather</b>
          </h4>
          <div className="grayBox">
          {yourVote==="optionOne"&& <Badge/>}
        

        <div className={yourVote==="optionOne"?"resultContent":"normalContent"}>
         <p>{question.optionOne.text}</p>
         <div className="spacerH"></div>
          <div className="myProgress">
              <div className="myBar" style={{width:`${optionOnePercent}`}}>
                 {optionOnePercent}
              </div>
          </div>
          </div>
          </div>

          <div className="grayBox">
          <div className="normalContent">
          <p>{question.optionTwo.text}</p>
          <div className="spacerH"></div>
          <div className="myProgress">
              <div className="myBar" style={{width:`${optionTwoPercent}`}}>
              {optionTwoPercent}
              </div>
          </div>
          </div>
          </div>
          <a href="/">back</a>
         
        </div>
        </div> 
        </div>
    )

}

export default ResultView;