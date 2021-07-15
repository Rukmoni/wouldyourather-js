import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QuestionCard from '../questionCard';
import './styles.css';

const TabsContent = ({ activeIndex, questions }) => {

	const [qList, setQList] = useState();

	useEffect(() => {
		setQList(questions);
	}, [questions]);

	const renderQuestions = () => {
		let list = qList.map((question) => {return <QuestionCard key={question.id} question={question} />});
		return <div className="container">{list}</div>;
	};

	return (
		<div className="tabs-content">{qList ? renderQuestions() : <div> No Questions Available to display</div>}</div>
	);
};

const TabsHeader = ({ titles, activeIndex, onChangeIndex }) => {
	return (
		<>
			<div className="tabs-header">
				{titles.map((item, index) => {
					return (
						<li key={item.name} className={activeIndex === index ? 'active' : ''}>
							<button className="tabButton" onClick={() => onChangeIndex(index)}>{item.name}</button>
						</li>
					);
				})}
			</div>
		</>
	);
};

TabsContent.propTypes={
	 titles:PropTypes.array,
	activeIndex:PropTypes.number,
	onChangeIndex:PropTypes.func
}
TabsHeader.propTypes={

	activeIndex:PropTypes.number,
	questions:PropTypes.object
}


export {TabsContent,TabsHeader}
