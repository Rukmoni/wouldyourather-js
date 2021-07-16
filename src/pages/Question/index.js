import React from 'react';
import { connect } from 'react-redux';
import ResultView from '../../components/ResultView';
import PollView from '../../components/PollView';
import './styles.css';





export class Question extends React.Component {
   
	render() {

       
        const {wrongPath,pollType,author,currentQuestion}=this.props;
		return (
			<div className="pollCardContainer">
            {wrongPath?  <div className="info">404 - Question Not Available!</div>:''}
            {pollType==='1'&& <PollView author={author} question={currentQuestion}/>}
            {pollType==='2'&& <ResultView author={author} question={currentQuestion}/>}	
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

		 author = users[currentQuestion.author];
		 if (Object.keys(currentUser.answers).includes(currentQuestion.id)) {
			pollType = '2';
		} else {
			pollType = '1';
		}  
    }
    

    return {currentQuestion,wrongPath,author,pollType};
}

export default connect(mapStateToProps)(Question);
