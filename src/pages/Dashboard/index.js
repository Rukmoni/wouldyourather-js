import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabsHeader, TabsContent } from '../../components/TabView';
import './styles.css';
const TabTitles = [
	{ id: 1, name: 'UnAnswered Questions' },
	{ id: 2, name: 'Answered Questions' },
];
export class DashBoard extends React.Component {
	constructor() {
		super();
		this.state = {
			activeTab: 1,
		};
		this.changeTabOnClick = this.changeTabOnClick.bind(this);
	}
	changeTabOnClick(id) {
		this.setState({ activeTab: id });
	}
	render() {
		return (
			<div className="Tabcontainer">
				<TabsHeader
					titles={TabTitles}
					activeIndex={this.state.activeTab}
					onChangeIndex={this.changeTabOnClick}
				/>
				<TabsContent
					titles={TabTitles}
					activeIndex={this.state.activeTab}
					questions={
						this.state.activeTab === 1 ? this.props.unAnsweredQuestions : this.props.answeredQuestions
					}
				/>
			</div>
		);
	}
}
DashBoard.propTypes={
	answeredQuestions:PropTypes.array,
    unAnsweredQuestions:PropTypes.array
}
function mapStateToProps({ authedUser, users, questions }) {
  if(users){
	  console.log(users[authedUser].answers)
  let answeredIds = Object.keys(users[authedUser]?.answers);

	return {
	answeredQuestions: Object.values(questions)
			.filter((question) => !answeredIds.includes(question.id))
			.sort((a, b) => b.timestamp - a.timestamp),
		unAnsweredQuestions: Object.values(questions)
			.filter((question) => answeredIds.includes(question.id))
			.sort((a, b) => b.timestamp - a.timestamp), 
  };
}
}

export default connect(mapStateToProps)(DashBoard);
