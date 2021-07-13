import React, { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {setAuthedUser} from '../../reduxStore/actions/authUser.actions';
import Select from 'react-select'
import "./styles.css";
const Login = ({users}) => {
   // const usersState=useSelector((state)=>state.users);
   const dispatch=useDispatch();
    const [loginOptions,setLoginOptions]=useState([]);
    useEffect(()=>{
      console.log("login rendered",users)
      const map = new Map(Object.entries(users));
      let _userList=Object.values(users);
      console.log("usersState",_userList);
      //setUsers(usersState)
     let _loginOptions=_userList.map((user)=>  ({
            key: user.id,
            label: user.name,
            value: user.id,
            image: { avatar: true, src: user.avatarURL }
          }) ) 
       console.log("usersState",_loginOptions) 
       setLoginOptions(_loginOptions);
        //setUsers(usersState)
        
    },[users])
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div className="loginContainer" >
    <div className="loginCard">
    <div className="titleBar">
    <p>Would You Rather!</p>
    </div>
    <div className="content">
    <p>Login</p>
    <div  style={{width:'400px',alignItems:'center'}}>
    <Select options={loginOptions} />
    <div className="spacerH"/>
    <div className="spacerH"/>
    <button className="buttonCommonWide" onClick={()=>dispatch(setAuthedUser('tylermcginnis'))}>Login</button>
    </div>
    </div>
    </div>
     
    </div>
  );
};

export default Login;