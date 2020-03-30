import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

const Contact = (props) => {
  const defaultContact = { name: "", email: "", message: "" }
  const [ contact, setContact ] = useState(defaultContact)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data: contact
    }).then((response)=>{
      console.log(response)
      if (response.data.status === 'success'){
        alert("Message Sent.")
        resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }
  const resetForm = () => {
    setContact(defaultContact)
  }
  const onFieldChange = (event) => {
    event.preventDefault()
    const newContact = {...contact}
    newContact[event.target.name] = event.target.value
    setContact(newContact)
  }
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-2">
            <h2>Contact</h2>
          </div>
          <hr width="1100" />
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <form method="POST">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input type="name" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={contact.name} onChange={onFieldChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={contact.email} onChange={onFieldChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" value={contact.message} onChange={onFieldChange}></textarea>
              </div>
            </form>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            {/* <input className="btn btn-primary" type="submit" value="Submit" ></input> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;