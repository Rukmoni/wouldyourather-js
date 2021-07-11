import React from 'react';
import { connect } from 'react-redux';
import ResultView from '../../components/ResultView';
import './styles.css';

const ScoreCard=({scoreData})=>{
  return(
    <div className="leaderBoardCard">
    <div className="avatar">
   <img src={scoreData.avatarURL} alt="Avatar" className="img" />
 </div>
 <div className="centerContent">
    <div className="info">
    Answered Questions : {scoreData.answersCount}
    </div>
    <div className="info">
    Created Questions : {scoreData.questionsCount}
    </div>
    </div>
    <div className="centerContent">
    <div className="scroeCard">
      {scoreData.score}
    </div>
    </div>
    </div>
  )
}

export class LeaderBoard extends React.Component {
   
	render() {
        console.log(this.props)
      
        const {leaderboardData}=this.props;
		return (
			<div className="pollCardContainer">
           <div className="info">
           LeaderBoard
           </div>
        {leaderboardData.map((scoreData)=>{
          return <ScoreCard scoreData={scoreData}/>
        })}
           
			</div>
		);
	}
}


function mapStateToProps({ users }) {
  const leaderboardData = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answersCount: Object.values(user.answers).length,
      questionsCount: user.questions.length,
      score: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => a.score - b.score)
    .reverse()
    .slice(0, 3);
  return {
    leaderboardData
  };
}

export default connect(mapStateToProps)(LeaderBoard);

