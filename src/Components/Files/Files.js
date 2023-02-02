import React, { useState , useEffect} from "react";
import axios from "axios";

const Files = (props) => {
  const [file, setfile] = useState("");
  const [filesId, setfilesId] = useState("");
  const [fetchFile, setfetchFile] = useState([]);
  console.log("fetchFile",fetchFile)
  console.log("filesId",filesId);


  function fileChange(e) {
    setfile(e.target.value);
    
  }



  const passfiles = async() =>{
     setfilesId(props.setfolderId)

     const response = await axios.post(
      "http://localhost:3001/files/get-file",{filesId:filesId}
    );
    console.log("filedata",response.data)
    setfetchFile(response.data)
    props.setFileValue(fetchFile)
     await axios.post("http://localhost:3001/files", { file: file, filesId:filesId })

    
   
  }

  // const fetchData = async () => {

  //   const response = await axios.post(
  //     "http://localhost:3001/files/get-file"
  //   );
  //   setfetchFile(response.data);

  // };
  
  //  props.setFileValue(fetchFile)

  // useEffect(() => {
  //   fetchData();
  // }, []);



  return (
    <div>
      <div
        class="modal fade"
        id="addfiles"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add files
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Enter file Name
                </span>
                <input
                  name="folder"
                  value={file}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={fileChange}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={passfiles}
              >
                Save
              </button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
