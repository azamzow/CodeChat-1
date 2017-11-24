import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
//import SocialButton from './Socialbutton'
import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      Username:'',
      email:'',
      password:''
    }
  }
  
  render() {

    return (
      <div className="Register">
      <div>
        <MuiThemeProvider>       
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>

           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
      
           <TextField
             hintText="Username"
             floatingLabelText="Codechat Alias"
             onChange = {(event,newValue) => this.setState({Username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           <RaisedButton label="Clear" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

          </div>
         </MuiThemeProvider>
      </div>
      </div>
    );



  }
}


const style = {
  margin: 15,
};

export default Register;