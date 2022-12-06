import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
   

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  //email 
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // password 
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // dispalying the message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // showing the error message
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  

    return (
        <div className="main-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label className="label">Name</label>
            <input onChange={handleName} className="input" value={name} type="text" />
            <label className="label">Email</label>
            <input onChange={handleEmail} className="input" value={email} type="email" />
            <label className="label">Password</label>
            <input onChange={handlePassword} className="input" value={password} type="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}