import React, { useState } from "react";
import {auth} from '../../Firebass';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [NewUser, setNewUser] = useState(true);
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, seterror] = useState(false);
  const [errormessage, seterrormessage] = useState(false);

  const submit =(e)=>{
    e.preventDefault();
    seterror(false);

    if(NewUser){
        createUserWithEmailAndPassword(auth, email, password)
        .then(() =>{
            localStorage.setItem("username", Username);
        })
        .catch((error) =>{
            seterror(true);
            const errormessage = error.message;
            seterrormessage(errormessage);
        })
    }else{
        signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            seterror(true)
            const errormessage = error.message;
            seterrormessage(errormessage);
        })
    }
  }

  return (
    <div className="login-main">
      <header>
        <span>
          from <i>AviCreativity</i>
        </span>
      </header>

      <h2 className="title">
        Sub-Min <br />
        Dashboard
      </h2>

      <form onSubmit={submit}>
        {NewUser && (
          <div className="username">
            <input
              type="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username</label>
          </div>
        )}

        <div className="email">
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="password">
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        {error && <p className="status">{errormessage}</p>}

        <button type="submit">{NewUser ? "Sign Up" : "Login"}</button>

        {NewUser ? (
          <span className="user-stat">
            Already have an account? <b onClick={() =>{
                setNewUser(false)
                seterror(false)
            }}>Log In</b>
          </span>
        ) : (
          <span className="user-stat">
            Don't have an account? <b onClick={()=>{
                setNewUser(true)
                seterror(false)
            }}>Sign Up</b>
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
