import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { submitAnswer } from '../../reduxStore/actions/questions.actions';
import './styles.css';

const PollView = ({ author, question }) => {
	const authedUser = useSelector((state) => state.authedUser);
	const [selectedOption, setSelectedOption] = useState(null);
	const dispatch = useDispatch();

	const handleSubmit = async () => {
		if (selectedOption) {
			try {
				dispatch(submitAnswer(authedUser, question.id, selectedOption))
				

			} catch (e) {
				console.log(e);
			}
		}
		//dispatch(handleUserAnswerUpdate("autheridtest"));
	};
	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
	};
	return (
		<div className="resultCard">
			<div className="titleBar">{author.name} asks</div>
			<div className="pollContainer">
				<div className="avatartall">
					<img src={author.avatarURL} alt="Avatar" className="img" />
				</div>

				<div className="pollBlock">
					<h4>
						<b>Would you rather</b>
					</h4>
					<p>
						{' '}
						<input type="radio" value="optionOne" name="option" onChange={handleOptionChange} />
						{question.optionOne.text}
					</p>

					<p>
						{' '}
						<input type="radio" value="optionTwo" name="option" onChange={handleOptionChange} />
						{question.optionTwo.text}
					</p>

					<button
						className={selectedOption ? 'buttonCommonWide' : 'buttonCommonWide_disabled'}
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default PollView;
