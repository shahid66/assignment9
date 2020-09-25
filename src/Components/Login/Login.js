import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Login.css'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';




firebase.initializeApp(firebaseConfig);



const Login = () => {
  const history=useHistory();
  const location=useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loginUser,setLoginUser]=useContext(UserContext);
  
  var provider = new firebase.auth.GoogleAuthProvider();
  const [newUser,setNewUser]=useState(false);

  const[user,setUser]=useState([{
    name:'',
    email:'',
    photo:'',
    password:'',
    confirmPassword:'',
    error:'',
    success:false
  }]);
  
  
  const handelChange =(e)=>{
    let isValidField;
    if(e.target.name ==='name'){
      isValidField = (e.target.value);
   }

    if(e.target.name ==='email'){
       isValidField = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name ==='password'){
      const passLength = e.target.value.length >6;
      const passPatarn = /\d{1}/.test(e.target.value);
      isValidField =passLength && passPatarn;
    }
    if(e.target.name ==='ConfirmPassword'){
      const passLength = e.target.value.length >6;
      const passPatarn = /\d{1}/.test(e.target.value);
      
      isValidField =passLength && passPatarn;
    }
    if(isValidField){
      const newUserInfo ={...user};
      newUserInfo[e.target.name] =e.target.value;
      setUser(newUserInfo);
    }
  }

  const handelEmailLogin =(e)=>{
if(newUser && user.email && user.password){

  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(res=>{
    const newUserInfo={...user};
    updateUserName(user.name);
    setNewUser(newUserInfo);

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

    }

    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newUserInfo={...user};
        setNewUser(newUserInfo);
        setLoginUser(newUserInfo)
        history.replace(from);
        console.log(res.user);
      })
      .catch(function(error) {
       
        console.log('login error')
      });
    }
    e.preventDefault();
  }
  const updateUserName=(name)=>{
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
      
    }).then(function() {
      console.log('update user')
    }).catch(function(error) {
      console.log('not update')
    });
    
  }
  
    return (
        <Row className="justify-content-md-center">
          <Col xs lg="4">
          <Form className='fromStyle'>
            <h3>{!newUser ? 'Login': 'SignUp'}</h3>
              <Form.Group  controlId="formGroupEmail">
                
              {newUser && <Form.Control name='name'  type="text" placeholder='name' />}
                
              </Form.Group>
              <Form.Group  controlId="formGroupEmail">
                
                 <Form.Control name='email' onChange={handelChange} type="email" placeholder='Email' />
                
              </Form.Group>
              <Form.Group  controlId="formGroupPassword">
                
                <Form.Control name='password' onChange={handelChange} type="password" placeholder=' Password' />
                
              </Form.Group>
              <Form.Group  controlId="formGroupPassword">
                
              {newUser &&<Form.Control name='ConfirmPassword' onChange={handelChange} type="password" placeholder='Confirm Password'  />}
                
              </Form.Group>
              {!newUser &&<Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                <Form.Check><label className='forgetpass' htmlFor="formBasicCheckbox">Forget password</label></Form.Check>
                
              </Form.Group>}
              <Button style={{width:'100%',marginTop:'64px'}} onClick={handelEmailLogin} variant="primary" type="submit">
                {newUser ?'Signup' :'Login'}
              </Button>
              <p className='text-center pt-4'>Don't have an account?<span onClick={()=>setNewUser(!newUser)}>Create Account</span></p>
            </Form>
          </Col>
        </Row>
    );
};

export default Login;