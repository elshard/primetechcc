import React from 'react';
import Header from './Header';
import logo from './images/logo.svg';
import headerimg from './images/headerimg.svg';
import firebase from './Firebase';
import"bootstrap/dist/css/bootstrap.min.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ProjectListing = () => {
  return (
    // <div className='main d-flex' style={{ position: 'fixed' }}>
    // <div className='header'>
    //   <Header />
    // </div>
    // <div >
    //   <div className='sub-div ' style={{ float: 'left' }}>

    //     <div><img style={{ backgroundSize: 'fill', backgroundRepeat: 'no-reapet', width: "100%", position: 'absolute', zIndex: -1 }} className='img-fluid' src={headerimg} /></div>

    //     <div style={{ margin: "60px 80px", fontSize: "30px", color: "white" }}><span> <ArrowBackIosIcon /></span>
    //       <span style={{ padding: "20px" }}>Create Project</span></div>
    //     <img style={{ alignItems: "center", display: 'block', justifyContent: 'center', marginLeft: '700px', marginTop: '-110px', zIndex: -1, position: "relative" }} src={logo} alt='logo' />

    //   </div>
    <div className=' main d-flex'>
    <div>
        <Header/>
        </div>
        <div>
        <div className='sub-div ' style={{float:'left'}} >
        <div><img style={{ backgroundSize: 'fill', backgroundRepeat: 'no-reapet', width: "10%", position: 'absolute', zIndex: -1 }} className='img-fluid' src={headerimg} /></div>

<div style={{ margin: "6px 8px", fontSize: "30px", color: "white" }}><span> <ArrowBackIosIcon /></span>
  <span style={{ padding: "20px" }}> Project Listing</span></div>
<img style={{ alignItems: "center", display: 'block', justifyContent: 'center', marginLeft: '70px', marginTop: '-110px' }} src={logo} alt='logo' />
 
        </div>
        
          <div class="container" style={{ float: 'left', margin: "20px 0px 0px 30px", height:"57px", zIndex: -1, border: "1px solid white", borderRadius: "10px", paddingTop: "5px", boxShadow: "5px 10px 18px #888888", background: "white" }}>
        <table className="table">
        <thead>
          <tr style={{background:"RGB(186, 202, 224)"}}>
            <th scope="col">Project Name</th>
            <th scope="col">Reason</th>
            <th scope="col">Type</th>
            <th scope="col">Division</th>
            <th scope="col">Category</th>
            <th scope="col">Priority</th>
            <th scope="col">Dept</th>
            <th scope="col">Location</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row"></th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" className="btn btn-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Start
                </button></td>
            <td><button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Close
                </button></td>
            <td> <button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Cancel
                </button>
                </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" className="btn btn-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Start
                </button></td>
            <td><button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Close
                </button></td>
            <td> <button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Cancel
                </button>
                </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td><button type="button" className="btn btn-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Start
                </button></td>
            <td><button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Close
                </button></td>
            <td> <button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Cancel
                </button>
                </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" className="btn btn-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Start
                </button></td>
            <td><button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                  Close
                </button></td>
            <td> <button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Cancel
                </button>
                </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" className="btn btn-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Start
                </button></td>
            <td><button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Close
                </button></td>
            <td> <button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                Cancel
                </button>
                </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" className="btn btn-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Start
                </button></td>
            <td><button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                   Close
                </button></td>
            <td> <button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                  Cancel
                </button>
                </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" className="btn btn-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Start
                </button></td>
            <td><button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Close
                </button></td>
            <td> <button type="button" className="btn btn-outline-primary btn-sm " style={{borderRadius:"30px",width:"80px"}} >
                    Cancel
                </button>
                </td>
            
          </tr>
        </tbody>
      </table>
        </div> 
        </div>
        </div>
  )
}

export default ProjectListing;