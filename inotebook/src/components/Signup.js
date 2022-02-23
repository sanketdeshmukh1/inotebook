import React from 'react'

function Signup() {
  return (
    <>
    <form >
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control my-1"
          id="email"
          name="email"
          aria-describedby="emailHelp"
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
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
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