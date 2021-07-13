import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; 
import { setAuthedUser } from '../../reduxStore/actions/authUser.actions';
import Select from 'react-select';
import './styles.css';

const Login = ({ users }) => {
	const dispatch = useDispatch();
	const [loginOptions, setLoginOptions] = useState([]);
	useEffect(() => {
		console.log('login rendered', users);
		const map = new Map(Object.entries(users));
		let _userList = Object.values(users);
		console.log('usersState', _userList);

		let _loginOptions = _userList.map((user) => ({
			key: user.id,
			label: user.name,
			value: user.id,
			image: { avatar: true, src: user.avatarURL },
		}));
		console.log('usersState', _loginOptions);
		setLoginOptions(_loginOptions);
	}, [users]);

	return (
		<div className="loginContainer">
			<div className="loginCard">
				<div className="titleBar">
					<p>Would You Rather!</p>
				</div>
				<div className="content">
					<p>Login</p>
					<div style={{ width: '400px', alignItems: 'center' }}>
						<Select options={loginOptions} />
						<div className="spacerH" />
						<div className="spacerH" />
						<button className="buttonCommonWide" onClick={() => dispatch(setAuthedUser('tylermcginnis'))}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
Login.propTypes={
    users:PropTypes.object
}
export default Login;
