import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  // post kriye evu all post page pr jva mate
  const navigate = useNavigate(); //to navigate page to all posst page after edit

  // console.log(name, email, age);

  // this is the function  which uses fetch to store our submitted data to database
  const handleSubmit = async (e) => {
    e.preventDefault();

    const addNote = { title, description };

    // fetch ma nakho api nu url
    const response = await fetch("http://127.0.0.1:8000", {
      method: "POST",
      body: JSON.stringify(addNote),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    // if something wrong happens or errors got caught
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    // everything is okay and request gets accepted
    if (response.ok) {
      console.log(result);
      setError("");
      
      setTitle("");
      setDescription("");
      navigate("/all");
      

    }
  };


  useEffect( ()=>{

  },[])


  return (
    <>
      <h1
        style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}
      >
        Create a new Note
      </h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          backgroundColor: "",
          width: "900px",
          height: "400px",
          boxShadow: "1px 2px 2px 2px rgba(0,0,0,0.5)",
          borderRadius: "5px",
          padding: "25px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              // name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="form-text">
              We'll never share your Note with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label"> Description</label>
            <textarea
              resise="none"
              type="text"
              className="form-control"
              name=" description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ height: "140px",resize:'none' }}
            />
            <div className="form-text">
              We'll never share your Note with anyone else.
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Create
