import React, {Component} from "react";
import axios from "axios";
import "../../express";
import "./contact";

class Contact extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    }
  
    handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"http://localhost:3001/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }
  
    resetForm(){
      
       this.setState({name: "", email: "", message: ""})
    }

    onNameChange(event) {
      this.setState({name: event.target.value})
      }
    
    onEmailChange(event) {
      this.setState({email: event.target.value})
      }
    
    onMessageChange(event) {
      this.setState({message: event.target.value})
      }

  render() {
    return(
      <body>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-2">
                <h2>Contact</h2>
            </div>
            <hr width="1100" />
          </div>
          <div className="row">
            <div className="col-12 col-md-12">
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={this.state.name} onChange={this.onNameChange.bind(this)}></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.email} onChange={this.onEmailChange.bind(this)}></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                </div>
              </form>
              <input className="btn btn-primary" type="submit" value="Submit" ></input>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Contact;