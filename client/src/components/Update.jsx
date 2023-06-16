import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';




const Update = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [age, setAge] = useState(0);

  const [error, setError] = useState("");
  
  const {id} = useParams();//help to get id from url

  const navigate = useNavigate();//to navigate page to all posst page after edit


  // jyare page kholiye update valu tyare data prefilled joiye ena mate
  const getSingleNote = async() =>{


    const response = await fetch(`http://localhost:8000/${id}`);

    const result = await response.json();

    if(!response.ok)
    {
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok)
    {
      setError('');
      console.log('updated user',result);//jna pr click kro eno data male che
      setTitle(result.title);
      setDescription(result.description);
      // setAge(result.age);

    }
  }

  // send updated data to backend
  const handleUpdate = async(e) =>{
    e.preventDefault();

    const updatedNote = { title, description, };

    const response = await fetch(`http://localhost:8000/${id}`,{
      method : 'PATCH',
      body: JSON.stringify(updatedNote),
      headers : {
        "Content-Type" : "application/json"
      }
    })

    const result = await response.json();

    if(!response.ok)
    {
      console.log(result.error)
      setError(result.error)
    }

    if(response.ok)
    {
      console.log(result)
      setError('')
      // setAge(0)
      setTitle('')
      setDescription('')
      navigate("/all")
    }


  }


  // to get single user call it in use effct
  useEffect( ()=>{
    getSingleNote();
  },[])


  return (
    <>
      <h1
        style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}
      >
        Edit Note
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
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              // name='name'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your Note with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              type="text"
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{height:'140px',resize:'none'}}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your Note with anyone else.
            </div>
          </div>
          {/* <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div> */}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Update
