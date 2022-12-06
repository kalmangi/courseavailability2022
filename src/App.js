
import React, { useState } from "react";

// import logo from './logo.svg';
import './App.css';
// import { Login } from "./Login";
// import { Register } from "./Register";
import User from './user';
function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

  return (
    <div className="App">
      {
        <User />
      }
      
    </div>
  );
}

 export default App;
