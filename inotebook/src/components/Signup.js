import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function Signup() {

  const [credentials, setCredentials] = useState({name:"", email: "", password: "",cpassword:""}) 
  const history=useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password,cpassword}=credentials;
    const response = await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password}), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
   
    history.push("/about")
   

  }; //handlesubmit

  const handleChange=(e)=>{

    setCredentials({...credentials,[e.target.name]:e.target.value})
}


  return (
    <>

<div class="p-3 mb-2 bg-primary text-white my-3">Welcome to Signup Page</div>

    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="email">Enter your name</label>
        <input
          type="name"
          className="form-control my-1"
          id="name"
          name="name"
          onChange={handleChange}
          aria-describedby="emailHelp"
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control my-1"
          id="email"
          onChange={handleChange}
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleChange}
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          onChange={handleChange}
          className="form-control"
          id="cpassword"
          name="cpassword"
          placeholder="Confirm Password"
        />
      </div>

      <button type="submit" className="btn btn-primary my-2">
        Submit
      </button>
    </form>
  </>
    )
}

export default Signup