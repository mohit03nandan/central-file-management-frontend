import React, { useState, useEffect } from "react";
import axios from "axios";

const Folders = (props) => {
  const [folder, setfolder] = useState("");
  const [fetchFolder, setfetchFolder] = useState([]);
  console.log("fetchFolder", fetchFolder);

  // console.log("folder", folder);
  function folderChange(e) {
    setfolder(e.target.value);
  }

  const passFolder = async () => {
    await axios.post("http://localhost:3001/folders", { folder: folder });

    const response = await axios.post(
      "http://localhost:3001/folders/get-folder"
    );
    setfetchFolder(response.data);
    props.setfolderValue(fetchFolder);
  };

  const fetchData = async () => {
    const response = await axios.post(
      "http://localhost:3001/folders/get-folder"
    );
    setfetchFolder(response.data);

  };
  
   props.setfolderValue(fetchFolder)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add folder
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
                  Enter folder Name
                </span>
                <input
                  name="folder"
                  value={folder}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={folderChange}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={passFolder}
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

export default Folders;
