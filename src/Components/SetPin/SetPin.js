import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PinInput from "react-pin-input";
import axios from "axios";
import style from "./SetPin.module.css";

const SetPin = () => {
  // const navigate = useNavigate();

  const [pin, setpin] = useState({
    password: "",
    reEnterPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setpin({
      ...pin,
      [name]: value,
    });
  }

  const submitPassword = async (e) => {
    if (pin.password === pin.reEnterPassword && pin.password !== "") {
      await axios
        .post("http://localhost:3001/register", pin)
        .then((res) => console.log(res));

      alert("password reset successfully");
    } else {
      alert("! Not mached");
    }
  };

  return (
    <div class="container" className={style.photos}>
      {/* {console.log("pin", pin)} */}

      <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Set Pin
              </h5>
            </div>
            <div class="modal-body">
              <div
                class="form-group"
                style={{ marginTop: "30px", marginBottom: "30px" }}
              >
                <label
                  for="exampleInputPassword1"
                  style={{ marginBottom: "20px" }}
                >
                  Enter New Pin
                </label>
                <input
                  name="password"
                  value={pin.password}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
                  placeholder="Set Pin"
                  style={{ marginBottom: "20px" }}
                  onChange={handleChange}
                />

                <label
                  for="exampleInputPassword1"
                  style={{ marginBottom: "20px" }}
                >
                  Confirm New Pin
                </label>
                <input
                  name="reEnterPassword"
                  value={pin.confirmpassword}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Pin"
                  onChange={handleChange}
                  style={{ marginBottom: "20px" }}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                data-bs-dismiss="modal"
                style={{
                  marginRight: "180px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                  background: "#142683",
                }}
                onClick={submitPassword}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPin;
