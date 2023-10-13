import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const clickHandler = () => {
    axios
      .post("http://localhost:8900/auth/login", user)
      .then((result) => {
        console.log(result);
        //  localStorage.setItem('token',result.data.token);
        const { token } = result.data;

        // Store the token in localStorage for future requests
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("button Clicked");
  };

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <label htmlFor="userName">Name:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="Enter User name"
        onChange={onChangeHandler}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        name="password"
        id="password"
        placeholder="Enter Password"
        onChange={onChangeHandler}
      />
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
};

export default Login;
