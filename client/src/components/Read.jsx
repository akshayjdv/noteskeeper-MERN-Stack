import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const Read = () => {
  const [data,setData] = useState();
  const [error,setError] = useState();



  // make an api func to get all data from backend
  const getData = async() =>{
    const response = await fetch('http://127.0.0.1:8000');//bydefault GET method j hoi
  
    const result = await response.json();

    // if any errors in getting result
    if(!response.ok)
    {
      console.log(result.error);
      setError(result.error);//if any error store it in errpr tab to display it later
    }

    if(response.ok)
    {
      setData(result);//no errors, fetched data from db and stores to data variable to show it on frontend
    }
  }


  // to delete a data
  const handleDelete = async( id) =>{
    const response = await fetch(`http://127.0.0.1:8000/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    // if any errors in getting result
    if (!response.ok) {
      console.log(result.error);
      setError(result.error); //if any error store it in errpr tab to display it later
    }

    if (response.ok) {
      // we set error to deleted success fully, once we press delete, we get this error for two secs and then error sent to null so we get error mes as deleted success fully and again get data call to reflect this msg 
      setError('DELETED SUCCESSFULLY'); //no errors delete

      setTimeout( ()=>{
        setError('');
        getData();
      },2000)
    }

  }



  // jyare user submit krse, tyare page ek var reload thase to use effect ni madada thi getdata call kri print kravvanuz

  useEffect( ()=>{
    getData();
  },[])

  // jetlo data database ma hato etlo jova male che have e data ne loop kravsu
  console.log(data);

  
  return (
    <>
      <h1>read all Notes </h1>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="container my-2">
        <h2 className="text-center">all Notes</h2>

        <div className="row">

          {/* errors were there for map method bcz data was called here, before it dosent have any data at inittial and it was stored later on - whem we call data it have nothing and it is empty
          && operator check if we have data or not */}
          {/* data?.map pn chale */}
          {data && data.map((curentElement)=>{
            return (
              <>
                <div key={curentElement._id} className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{curentElement.title}</h5>
                      <p className="card-text">{curentElement.description}</p>
                      {/* <p className="card-text">{curentElement.age}</p> */}
                      <div className="flex ">
                        <button
                          style={{marginRight:'20px'}}
                          className="btn btn-primary"
                          onClick={() => handleDelete(curentElement._id)}
                        >
                          delete
                        </button>
                        <NavLink
                          to={`/${curentElement._id}`}
                          className="btn btn-primary"
                        >
                          edit
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
            
          })}

        </div>

          
      </div>
    </>
  );
};

export default Read;
