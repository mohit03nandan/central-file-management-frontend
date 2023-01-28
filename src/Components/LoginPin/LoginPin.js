import React, { useState } from "react";
import PinInput from "react-pin-input";
import { useNavigate } from "react-router-dom";
import style from "./LoginPin.module.css";
import axios from "axios";

const LoginPin = (props) => {
  const navigate = useNavigate()
  const [password, setpassword] = useState("");
  console.log("password",password)
  const [posts, setPosts] = useState();
  console.log("posts", posts);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const handleSubmit = async (e) => {
    if (authenticated === true) {
    //   setPosts("true");
      navigate("/Home");
    }
     else {
      await axios
        .post("http://localhost:3001/login", { password: password })
        .then((res) => setPosts(res.data.message))
        .catch((err) => console.log(err));
      if (posts === "true") {
        navigate("/Home")
      } else if (posts === "false") {
        alert("password incorrect")
      }
    }
    if (posts === "true") {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
    } else {
      // alert("wrong password");
    }
    console.log(authenticated);
  };


  return (
    <div class="container" className={style.photo}>
     

      <div
        class="card text-center"
        style={{
          width: "550px",
          height: "300px",
          marginLeft: "450px",
          marginTop: "200px",
          position:"absolute"
        }}
      >
        <div class="card-body">
          <h5 class="card-title">Enter Account Pin</h5>
          <p class="card-text">
            <PinInput
              name="Password"
              value={password}
              length={4}
              initialValue=""
              secret
              onChange={(value, index) => {
                setpassword(value);
              }}
              type="numeric"
              inputMode="number"
              style={{marginTop: "80px" }}
              inputStyle={{ borderColor: "#C8D6E5" }}
              inputFocusStyle={{ borderColor: "#C8D6E5" }}
              onComplete={(value, index) => {
                password(value);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
            .
          </p>
          <button class="btn btn-primary" onClick={handleSubmit} >Enter Pin</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPin;
