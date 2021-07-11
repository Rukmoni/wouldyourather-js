import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
const Question = ({ match }) => {
	const usersState = useSelector((state) => state.users);
	const questionsState = useSelector((state) => state.questions);
  const authedState = useSelector((state) => state.authedUser);
 const [user,setUser]=useState('');
 const [question,setQuestion]=useState('');
 const [author,setAuthor]=useState('');
  const pageState = ['NoMatch', 'PollView', 'ResultView'];

	const [currentMode, setCurrentMode] = useState(pageState[0]);
	useEffect(() => {
    let validQuestion=questionsState[match.params.id];
   
		if (!validQuestion) {
     
			setCurrentMode(pageState[0]);
		} else {
		console.log(usersState, authedState);
		let _user = usersState[authedState];
  let _question = questionsState[match.params.id];
  let _author=usersState[_question.author];
  setUser(_user);
  setQuestion(_question);
      setAuthor(author=>_author);
      console.log("setCurrentMode",currentMode,"Author",_author)
			if (Object.keys(_user.answers).includes(_question.id)) {
				setCurrentMode(pageState[2]);
			} else {
				setCurrentMode(pageState[1]);
      } 
      console.log("setCurrentMode",currentMode,"Author",author)
		}
		
	}, []);

	/* return <div style={{ backgroundColor: 'red' }}>{currentMode == pageState[0] && <div> Page Not Found!</div>}
  <div style={{ backgroundColor: 'red' }}>{currentMode}</div>
  </div>; */
  return(
    <div className="pollCardContainer">
      <div className="pollCard">
       {/* <div className="titleBar">
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
         
        </div> */}
      </div>
    </div>

  )
};

export default Question;
