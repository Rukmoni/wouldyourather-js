import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../../reduxStore/actions/questions.actions';
import './styles.css';

export class NewQuestion extends React.Component {
	onSubmit = (e) => {
		e.preventDefault();
	};
	state = {
		isSubmitted: false,
		isLoading: false,
		optionOneText: '',
		optionTwoText: '',
	};

	handleChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.id]: e.target.value });
	};

	handleSubmit = async (e) => {
		console.log('handleSubmit');
		e.preventDefault();
		const { authedUser, handleAddQuestion } = this.props;
		const { optionOneText, optionTwoText } = this.state;
		await handleAddQuestion(optionOneText, optionTwoText, authedUser);
		this.setState({ isSubmitted: true });
	};
	render() {
		if (this.state.isSubmitted) {
			return <Redirect to="/" />;
		}

		return (
			<div className="pollCardContainer">
				<div className="info"></div>
				<div className="questionCard">
					<div className="titleBar"> Add New Poll Question</div>
					<div className="questionContent">
						<p>Would you rather</p>
						<input type="text" className="textInput" id="optionOneText" onChange={this.handleChange} />
						or
						<input type="text" className="textInput" id="optionTwoText" onChange={this.handleChange} />
						<div className="spacerH" />
						<button className="buttonCommonWide" onClick={this.handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({ authedUser }) {
	return {
		authedUser,
	};
}
export default connect(mapStateToProps, { handleAddQuestion })(NewQuestion);
