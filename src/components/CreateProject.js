import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import logo from './images/logo.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import headerimg from './images/headerimg.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BackHand } from '@mui/icons-material';

const CreateProject = () => {
  const [user, setUser] = useState({
    theme: "",
    Reason: "",
    Type: "",
    Division: "",
    Category: "",
    Priority: "",
    Department: "",
    sdate: "",
    edate: "",
    location: "",
  })

  const [error, setError] = useState();

  const navigate = useNavigate();
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value })
  };
  const postData = async (e) => {
    e.preventDefault();
    const { theme, Reason, Type, Division, Category, Priority, Department, sdate, edate, location } = user;
    if ((theme && Reason && Type && Division && Category && Priority && Department && sdate && edate && location)) {
      const res = await fetch("https://projectdatabase-fe3ae-default-rtdb.firebaseio.com/createproject.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            theme,
            Reason,
            Type,
            Division,
            Category,
            Priority,
            Department,
            sdate,
            edate,
            location
          })

        });
      if (res) {
        setUser({
          theme: "",
          Reason: "",
          Type: "",
          Division: "",
          Category: "",
          Priority: "",
          Department: "",
          sdate: "",
          edate: "",
          location: "",
        },
        ); alert("Data stored Sucessfully")
      }

    } else {
      alert("Please fill all the data")
    }





    // const handlesubmit = (e) => {
    //   e.preventDefault();
    //   if(theme!==''){
    //     setError('');
    //     Navigate("/projectlisting");

    //   }else{
    //     setError('Theme is required')
    //   }

    // }
  }
  return (
    <>
      <div className='main d-flex' style={{ position: 'fixed' }}>
        <div className='header'>
          <Header />
        </div>
        <div >
          <div className='sub-div ' style={{ float: 'left' }}>

            <div><img style={{ backgroundSize: 'fill', backgroundRepeat: 'no-reapet', width: "100%", position: 'absolute', zIndex: -1 }} className='img-fluid' src={headerimg} /></div>

            <div style={{ margin: "60px 80px", fontSize: "30px", color: "white" }}><span> <ArrowBackIosIcon /></span>
              <span style={{ padding: "20px" }}>Create Project</span></div>
            <img style={{ alignItems: "center", display: 'block', justifyContent: 'center', marginLeft: '700px', marginTop: '-110px', zIndex: -1, position: "relative" }} src={logo} alt='logo' />

          </div>
          <div class="container" style={{ float: 'left', margin: "10px 0px 0px 30px", height:"570px", zIndex: -1, border: "1px solid white", borderRadius: "10px", paddingTop: "20px", boxShadow: "5px 10px 18px #888888", background: "white" }}>

            <form class="row" method="POST" >
              <div style={{ marginLeft: "40px" }}>
                <input type="text" name="theme" id="theme" value={user.theme} onChange={getUserData} placeholder='Enter Project Theme' style={{ width: "700px", height: "90px", borderRadius: "10px", padding: "0px 20px" }} autocomplte="off" required />
                {/* {Error && <div className='error-msg'>{error}</div>} */}

                <Button onClick={postData} style={{ borderRadius: "30px", margin: "-120px 0px 10px 1100px", height: "40px", width: "150px" }} color="secondary">Save Project</Button>

              </div>
              <div className='wrapper'></div>
              <div class="col " style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="Reason" style={{ marginBottom: "4px" }}>Reason</label>


                <select className="form-select"
                  type="text"
                  id="Reason"
                  name="Reason" aria-label="Default select example " value={user.Reason} onChange={getUserData} style={{ width: "300px", height: "60px" }}>
                  <option selected>Bussiness</option>
                  <option >Dealership</option>
                  <option >Transport</option>
                </select>

              </div>
              <div class="col " style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="Type" style={{ marginBottom: "4px" }}>Type</label>


                <select class="form-select"
                  type="text"
                  id="Type"
                  name="Type"
                  aria-label="Default select example " onChange={getUserData} style={{ width: "300px", height: "60px" }}>
                  <option selected>Internal</option>
                  <option >External</option>
                  <option >Vendor</option>
                
                </select>

              </div>
              <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="Division" style={{ marginBottom: "4px" }}>Division</label>

                <select class="form-select" name="Division" type="text" id="Division" aria-label="Default select example" onChange={getUserData} value={user.Division} style={{ width: "300px", height: "60px" }}>
                  <option selected>Filters</option>
                  <option >Compressor</option>
                  <option >Pumps</option>
                  <option >Glass</option>
                  <option >Water Heater</option>
                </select>

              </div>
              <div class="col " style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="Category" style={{ marginBottom: "4px" }}>Category</label>


                <select name="Category" type="text"
                  id="Category" value={user.Category} class="form-select" onChange={getUserData} aria-label="Default select example " style={{ width: "300px", height: "60px" }}>
                  <option selected>Quality A</option>
                  <option >Quality B</option>
                  <option >Quality C</option>
                  <option>Quality D</option>
                </select>

              </div>
              <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="Priority" style={{ marginBottom: "4px" }}>Priority</label>


                <select class="form-select" type="text"
                  id="Priority" value={user.Priority} name="Priority" onChange={getUserData} aria-label="Default select example " style={{ width: "300px", height: "60px" }}>
                  <option selected>High</option>
                  <option >Low</option>
                  <option >Medium</option>
                  
                </select>

              </div>
              <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="Department" style={{ marginBottom: "4px" }}>Department</label>


                <select type="text" id="Department"
                  name="Department" class="form-select" value={user.Department} onChange={getUserData} aria-label="Default select example " style={{ width: "300px", height: "60px" }}>
                  <option selected>Strategy</option>
                  <option >Finance</option>
                  <option >Quality</option>
                  <option >Stores</option>
                  <option >Maintenance</option>
                </select>

              </div>
              <div class="col " style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="Start Date as per Project Plan" style={{ marginBottom: "4px" }}>Start Date as per Project Plan</label><br />

                <input type="date" style={{ width: "300px", height: "60px", borderRadius: "4px" }} id="Start Date as per Project Plan" onChange={getUserData} name="sdate" value={user.sdate} />

              </div>
              <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="End Date as per Project Plan" style={{ marginBottom: "4px" }}>End Date as per Project Plan</label><br />
                <input type="date" value={user.edate} style={{ width: "300px", height: "60px", borderRadius: "4px" }} onChange={getUserData} id="End Date as per Project Plan" name="edate" placeholder='D Month Yr' />

              </div>
              <div class="col" style={{ margin: "10px 20px 20px 50px" }}>
                <label htmlFor="Location" style={{ marginBottom: "4px" }}>Location</label>


                <select value={user.location} type="text"
                  id="location" class="form-select" name="location" onChange={getUserData} aria-label="Default select example " style={{ width: "300px", height: "60px" }}>
                  <option selected>Pune</option>
                  <option >Delhi</option>
                  <option >Mumbai</option>
                  
                </select>

              </div>
              <div style={{ marginLeft: "950px" }}>Status:<b>Registered</b></div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}


export default CreateProject