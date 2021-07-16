import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const Badge = () => {
	return (
		<div className="wrapper">
			<div className="ribbon-wrapper-green">
				<div className="ribbon-green">You</div>
			</div>
		</div>
	);
};

const ResultView = ({ author, question }) => {
	const [optionOnePercent, setOptionOnePercent] = useState('0%');
	const [optionTwoPercent, setOptionTwoPercent] = useState('0%');
	const [countOption1,setCountOption1]=useState(0);
	const [countOption2,setCountOption2]=useState(0);
	const [total,setTotal]=useState(0);
	const [yourVote, setYourVote] = useState('');

	useEffect(() => {
		let CountOption1 = question.optionOne.votes.length;
		let CountOption2 = question.optionTwo.votes.length;
		let votesTotal = CountOption1 + CountOption2;
		let percent1 = (CountOption1 / votesTotal) * 100 + '%';
		let percent2 = (CountOption2 / votesTotal) * 100 + '%';
		let _yourVote = author.answers[question.id];
		setCountOption1(CountOption1);
		setCountOption2(CountOption2);
		setYourVote(_yourVote);
		setTotal(votesTotal);
		setOptionOnePercent(percent1);
		setOptionTwoPercent(percent2);
	}, [author,question]);

	return (
		<div className="resultCard">
			<div className="titleBar">{author.name} asks</div>
			<div className="pollContainer">
				<div className="avatartall">
					<img src={author.avatarURL} alt="Avatar" className="img" />
				</div>
				
				<div className="contentBlock">
					<h3>
						<b>Results:</b>
					</h3>
					<h4>
						<b>Would you rather</b>
					</h4>
					<div className="grayBox">
						{yourVote === 'optionOne' && <Badge />}

						<div className={yourVote === 'optionOne' ? 'resultContent' : 'normalContent'}>
							<div className="leftalign">{question.optionOne.text}</div>
							<div className="spacerH"></div>
							<div className="myProgress">
								<div className="myBar" style={{ width: `${optionOnePercent}` }}>
									{optionOnePercent}
								</div>
							</div>
							<div className="spacerH"></div>
							<div className="leftalign">{countOption1} out of {total} votes</div>
						</div>
					</div>

					<div className="grayBox">
					{yourVote === 'optionTwo' && <Badge />}
					<div className={yourVote === 'optionTwo' ? 'resultContent' : 'normalContent'}>
							<div className="leftalign">{question.optionTwo.text}</div>
							<div className="spacerH"></div>
							<div className="myProgress">
								<div className="myBar" style={{ width: `${optionTwoPercent}` }}>
									{optionTwoPercent}
								</div>
							</div>
							<div className="leftalign">{countOption2} out of {total} votes</div>
						</div>
					</div>
                    <Link to="/">back</Link>
			
				</div>
			</div>
		</div>
	);
};
ResultView.propTypes = {
	author: PropTypes.object,
	question: PropTypes.object,
};
export default ResultView;
