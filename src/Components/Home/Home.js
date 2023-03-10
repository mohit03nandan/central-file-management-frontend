import React, { useState } from "react";
import style from "./Home.module.css";
import image from "../images/cuvettelogo.jpg";
import { useNavigate } from "react-router-dom";
import SetPin from "../SetPin/SetPin";
import Folders from "../Folders/Folders";
import Files from "../Files/Files";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [folderValue, setfolderValue] = useState([]);
  console.log("foldervalue", folderValue);

  const [FileValue, setFileValue] = useState([]);
  console.log("FileValue", FileValue);

  const [folderBreadcrumb, setfolderBreadcrumb] = useState(" ");
  const [fileBreadcrumb, setfileBreadcrumb] = useState(" ");

  const [folderId, setfolderId] = useState("");
  console.log("folderId", folderId);

  // document.getElementById(Folders.id).color= "red";
  function LockNow() {
    navigate("/");
  }

  console.log("folderBreadcrumb", folderBreadcrumb);
  return (
    <div>
      <div class="container" className={style.container}>
        <div class="row">
          <div class="col-sm-3">
            <div class="card" className={style.col3}>
              <div class="card-body" className={style.logo}>
                <img
                  src={image}
                  class="img-fluid"
                  alt="Responsive "
                  className={style.cuvette}
                />
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div className={style.Addfile}>
                      <button
                        type="button"
                        class="btn btn-outline-primary "
                        data-bs-toggle="modal"
                        data-bs-target="#addfiles"
                      >
                        <div class="row">
                          <div class="col-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              fill="currentColor"
                              class="bi bi-file-earmark-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                            </svg>
                          </div>
                          <div class="col-4">Addfile</div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="col-6">
                    <button
                      type="button"
                      class="btn btn-outline-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div class="row">
                        <div class="col-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            fill="currentColor"
                            class="bi bi-folder-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
                            <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
                          </svg>
                        </div>
                        <div class="col-4">Addfolder</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* <div class="row"> */}
                {/* <div class="col-12"> */}
                <div>
                  {folderValue && (
                    <div style={{ marginTop: "50px" }}>
                      {folderValue.map((Folders) => (
                        <div
                          className="card"
                          style={{
                            marginLeft: "40px",
                            marginTop: "20px",
                            background: "#EBF0F5",
                            borderRadius: "5px",
                            width: "250px",
                            height: "45px",
                          }}
                        >
                          <div
                            class="row"
                            key={Folders._id}
                            onClick={async () => {
                              const result = await axios.post(
                                "http://localhost:3001/files/get-file",
                                { filesId: Folders._id }
                              );
                              setFileValue(result.data);
                              setfolderBreadcrumb(Folders.folderName);
                              setfolderId(Folders._id);
                            }}
                          >
                            <div
                              className="col-3"
                              style={{
                                paddingLeft: "40px",
                                paddingTop: "10px",
                              }}
                            >
                              {/*  */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                class="bi bi-folder"
                                viewBox="0 0 16 16"
                              >
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                              </svg>
                            </div>
                            <div
                              className="col-9"
                              style={{
                                paddingLeft: "20px",
                                paddingTop: "10px",
                              }}
                            >
                              <h4 style={{ color: "#566474" }}>
                                {Folders.folderName}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div
                className="container-fluid"
                style={{ background: "#E5E5E5" }}
              >
                <button
                  type="button"
                  class="btn btn-primary "
                  style={{ marginLeft: "30px", marginTop: "540px" }}
                  onClick={LockNow}
                >
                  <div class="row">
                    <div class="col-2" style={{ paddingLeft: "80px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-lock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                      </svg>
                    </div>
                    <div class="col-6" style={{ paddingRight: "80px" }}>
                      LockNow
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-9">
            <SetPin />
            <Folders setfolderValue={setfolderValue} />
            <Files setfolderId={folderId} setFileValue={setFileValue} />
            <div class="container">
              <div
                style={{
                  float: "right",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  paddingTop: "20px",
                }}
              >
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ marginRight: "30px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    class="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                </button>

                <button type="button" class="btn btn-light" onClick={LockNow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    class="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div style={{ marginTop: "100px" }}>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <h5>{folderBreadcrumb}</h5>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {fileBreadcrumb}
                  </li>
                </ol>
              </nav>

              <hr />
        
              <div  >
              {FileValue.map((folder, index) => (
                <div key={index} >
                  {/* <h2>{folder._id}</h2> */}
                  <div className="card" style={{flexDirection: "row"}}>
                    {folder.FilesName.map((file, index) => (
                      <div key={index} style={{marginLeft:"30px" , marginTop:"10px"}} onClick={()=>{setfileBreadcrumb(file.fileValue)}} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#69A1F8" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                        </svg>
                        <h5 style={{marginTop:"10px", textAlign:"center"}}>{file.fileValue}</h5>
                        
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
               
            </div>
          </div>
          <div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
