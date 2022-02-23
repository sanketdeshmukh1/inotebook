import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
  const history=useHistory();
    const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password}), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    if(json.sucess){
history.push("/signup")
    }
  }; //handlesubmit

  const handleChange=(e)=>{

    setCredentials({...credentials,[e.target.name]:e.target.value})
}


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control my-1"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
