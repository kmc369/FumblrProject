import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { NavLink } from 'react-router-dom';

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const demoUser = async () => {
    const demoUserCredential = 'bobbie@aa.io'
    const demoUserPassword = 'password'
    return await dispatch(login(demoUserCredential, demoUserPassword))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if(data && data.errors) {
          setErrors(data.errors);
        }
      })
  }

  return (
    <div className="loginForm">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
        <div className="demo-user">
          <NavLink to='/' onClick={demoUser} >Demo User</NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginFormModal;
