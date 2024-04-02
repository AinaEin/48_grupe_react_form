import { useState } from "react";
import style from "./Form.module.css";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [repeatPasswordErr, setRepeatPasswordErr] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRepeatPasswordChange(e) {
    setRepeatPassword(e.target.value);
  }

  function isValidUsername(text) {
    if (text.length < 1) {
      return "Your username is too short";
    }

    if (text.length > 20) {
      return "Your username is too long";
    }

    return true;
  }

  function isValidEmail(email) {
    const parts = email.split("@");
    const domainPart = parts[1];
     const localPart = parts[0];
    const invalidSymbols = /[^a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]/;

    if (email.length < 6) {
      return "Your email is too short";
    }

    if (email.length > 50) {
      return "Your email is too long";
    }

    if (!email.includes("@")) {
      return "The email must contain an @ symbol.";
    }

    if (parts.length > 2) {
      return "The email must contain only one @ symbol.";
    }

    if (!domainPart.includes(".")) {
      return "The domain part of the email must contain at least one dot.";
    }

    if (email.includes(" ")) {
      return "The email must not contain spaces.";
    }

    if (invalidSymbols.test(localPart)) {
      return "The local part of the email contains invalid characters.";
    }

    return true;
  }

  function isValidPassword(password) {
    if (password.length < 1) {
      return "Your password is too short";
    }

    if (password.length < 30) {
      return "Your password is too long";
    }

    if (password.search(/[a-z]/) == -1) {
      return "Your password needs at least one lower case letter.";
    }

    if (password.search(/[A-Z]/) == -1) {
      return "Your password needs at least one upper case letter.";
    }

    if (password.search(/[0-9]/) == -1) {
      return "Your password needs a number.";
    }

    return true;
  }

  function isValidRepeatPassword(password, repeatPassword) {
    return password !== repeatPassword ? "Pasword doesn't match" : true;
  }

  function validateData() {
    const usernameErrorValue = isValidUsername(username);
    const emailErrorValue = isValidEmail(email);
    const passwordErrorValue = isValidPassword(password);
    const repeatPasswordErrorValue = isValidRepeatPassword(repeatPassword);

    let isAllFormValid = true;

    if (usernameErrorValue !== true) {
      isAllFormValid = false;
      setUsernameErr(usernameErrorValue);
    } else {
      setUsernameErr("");
    }

    if (!isValidEmail(email)) {
      isAllFormValid = false;
      setEmailErr(emailErrorValue);
    } else {
      setEmailErr("");
    }

    if (!isValidPassword(password)) {
      isAllFormValid = false;
      setPasswordErr(passwordErrorValue);
    } else {
      setPasswordErr("");
    }

    if (password !== repeatPassword) {
      isAllFormValid = false;
      setRepeatPasswordErr(repeatPasswordErrorValue);
    } else {
      setRepeatPasswordErr("");
    }

    return isAllFormValid;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const isFormValid = validateData();

    if (isFormValid) {
      console.log("everything is good and been sent to server");
      // request to server
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className={style.form}>
      <div className={style.formRow}>
        <label className={style.label} htmlFor="">
          Username
        </label>
        <input
          value={username}
          onChange={handleUsernameChange}
          className={style.input}
          type="text"
          placeholder="Eg. John"
        />
        {usernameErr.length ? (
          <p className={style.error}>{usernameErr}</p>
        ) : null}
      </div>
      <div className={style.formRow}>
        <label className={style.label} htmlFor="">
          Email
        </label>
        <input
          value={email}
          onChange={handleEmailChange}
          className={style.input}
          type="email"
          placeholder="Eg. john@cena.com"
        />
        {emailErr.length ? <p className={style.error}>{emailErr}</p> : null}
      </div>
      <div className={style.formRow}>
        <label className={style.label} htmlFor="">
          Password
        </label>
        <input
          value={password}
          onChange={handlePasswordChange}
          className={style.input}
          type="password"
          placeholder="enter your password"
        />
        {passwordErr.length ? (
          <p className={style.error}>{passwordErr}</p>
        ) : null}
      </div>
      <div className={style.formRow}>
        <label className={style.label} htmlFor="">
          Repeat password
        </label>
        <input
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          className={style.input}
          type="password"
          placeholder="enter your password"
        />
        {repeatPasswordErr.length ? (
          <p className={style.error}>{repeatPasswordErr}</p>
        ) : null}
      </div>
      <div className={style.formRow}>
        <button className={style.button} type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
