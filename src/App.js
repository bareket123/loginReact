import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component{
  state= {
      username:"",
      password:"",
      repeatedPassword:"",
      logIn:false


}
setUserName=(e)=>{
      const userNameInput=e.target.value;
      this.setState({
          username:userNameInput,

      })
}
    setPassword=(e)=>{
        const passwordInput=e.target.value;
        this.setState({
            password:passwordInput

        })
    }
    setRepeatedPassword=(e)=>{
        const repeatedPasswordInput=e.target.value;
        this.setState({
            repeatedPassword:repeatedPasswordInput
        })
    }
    submitButton=()=>{
      let disable=true;
     if (this.state.username !==""&& this.state.password !==""&& this.state.repeatedPassword!==""){
        if (this.state.password===this.state.repeatedPassword)
            if (this.state.username.length>=6){
                disable=false;

            }
     }

     return disable;
    }
    passwordMatch=()=>{
      let match=false;
      if (this.state.password.length>0 && this.state.repeatedPassword.length>0){
          if (this.state.password===this.state.repeatedPassword){
              match=true;
          }
      }else if(this.state.password=="" && this.state.repeatedPassword==""){
          match=true;
      }
      return match;
    }
    logIn=()=>{
      this.setState({
         logIn:true
      })
    }


    render() {
        return (
            <div className="App">
                {this.state.logIn ?
                    <div>Hello {this.state.username} welcome to my website!</div>
                    :
                    <div>
                        <h1>To create an account, fill the below details</h1>
                        <input placeholder={"Enter User Name"} value={this.state.username} onChange={this.setUserName}/>  <br/>   <br/>
                        <input placeholder={"Enter Password"} value={this.state.password} onChange={this.setPassword}/>  <br/>   <br/>
                        <input placeholder={"Repeat Password"} value={this.state.repeatedPassword} onChange={this.setRepeatedPassword}/>
                        <br/>   <br/>
                        {
                            !this.passwordMatch() &&
                            <div>Password not match</div>
                        }
                        <button disabled={this.submitButton()} onClick={this.logIn}>Submit</button>

                    </div>

                }

            </div>
        );
    }



}

export default App;
