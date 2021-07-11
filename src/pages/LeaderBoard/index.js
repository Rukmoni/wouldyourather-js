import React from 'react';
import { connect } from 'react-redux';
import ResultView from '../../components/ResultView';
import './styles.css';



/* const ResultView=({author,question})=>{
    console.log("ResultView:",author)
    return(
        <div className="pollCard">
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
              <div className="myBar">
                  25%
              </div>
          </div>
          </div>
     
          <button className="btn" onClick={()=>{}}>Submit</button>
        </div>
        </div> 
        </div>
    )

} */

export class LeaderBoard extends React.Component {
   
	render() {
        console.log(this.props)
        const pageState = ['NoMatch', 'PollView', 'ResultView'];
        const {wrongPath,pollType,author,currentQuestion}=this.props;
		return (
			<div className="pollCardContainer">
           <div className="info">
           LeaderBoard
           </div>
           <div className="leaderBoardCard">
           <div className="avatar">
          <img src="author.avatarURL" alt="Avatar" className="img" />
        </div>
        <div className="centerContent">
           <div className="info">
           LeaderBoard
           </div>
           <div className="info">
           LeaderBoard
           </div>
           </div>
           <div className="centerContent">
           <div className="scroeCard">
             50
           </div>
           </div>
           </div>
           
			</div>
		);
	}
}
function mapStateToProps({ authedUser, users, questions }, { match, question_id }) {
    let currentQuestion = questions[match.params.id];
    let currentUser=users[authedUser];
	let wrongPath = currentQuestion ? false : true;
	let author = '';
	let pollType = '0';
	if (!wrongPath&&currentUser) {
        console.log("usersusersusers",Object.keys(currentUser.answers))
		 author = users[currentQuestion.author];
		 if (Object.keys(currentUser.answers).includes(currentQuestion.id)) {
			pollType = '1';
		} else {
			pollType = '2';
		}  
    }
    

    return {currentQuestion,wrongPath,author,pollType};
}
//export default connect(mapStateToProps)(NewQuestion);
export default LeaderBoard;
