import React from 'react';
import { connect } from 'react-redux';
import ResultView from '../../components/ResultView';
import './styles.css';

const PollView=({author,question})=>{
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
          <p> <input type="radio" value="Option1" name="option" />{question.optionOne.text}</p>
         
          <p> <input type="radio" value="Option2" name="option" />{question.optionTwo.text}</p>
          <button className="btn" onClick={()=>{}}>Submit</button>
        </div>
        </div> 
        </div>
    )

}

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

export class Question extends React.Component {
   
	render() {
        console.log(this.props)
        const pageState = ['NoMatch', 'PollView', 'ResultView'];
        const {wrongPath,pollType,author,currentQuestion}=this.props;
		return (
			<div className="pollCardContainer">
            {wrongPath?  <div className="info">404 - Question Not Available!</div>:''}
            {pollType==1&& <div className="pollCard"></div>}
            {pollType==2&& <ResultView author={author} question={currentQuestion}/>}	
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

export default connect(mapStateToProps)(Question);
