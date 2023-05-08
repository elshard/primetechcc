import React, { useState } from 'react';
import login from './images/login.svg';
import logo from './images/logo.svg';
import { Button, Hidden, Link } from '@mui/material';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');



  const handleEmailChange = (e) => {

    setSuccessMsg('')
    setEmailError('');
    setEmail(e.target.value);
  }
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  const handlePasswordChange = (e) => {

    setSuccessMsg('')
    setPasswordError('');
    setPassword(e.target.value);

  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // navigate("/createProject");

    if (email !== '') {
      const emailRegex = /^([\w-\.]+)@((\[[0-9]{1,3}\.z[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (emailRegex.test(email)) {
        setEmailError('');
        if (email === 'admin@gmail.com') {
          setEmailError('');
          if (password === 'demo') {
            setSuccessMsg('You are sucessfully logged in')
            navigate("/createProject")
          } else {
            setPasswordError("password does Not match with email address")
          }
        }
        else {
          setEmailError("email is not registred")
        }
      }
      else {
        setEmailError('Invalid Email')
      }

    }
    else {
      setEmailError("Email Required");
    }
    if (password !== '') {
    }
    else {
      setPasswordError("password required");
    }


  }



  return (
    <>
      <div className='main-div' style={{ position: 'relative' }}>
        <div className='sub-div'>

          <img className='img-fluid' style={{ backgroundSize: "fill", backgroundRepeat: 'no-repeat', position: 'absolute', zIndex: -1, width: "100%" }} src={login} alt="logo" />


          <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }} >
            <img className='img-fluid' style={{ marginLeft: "50px", marginTop: "100px" }} src={logo} width={100} height={100} alt="logo" />
            <span style={{ color: 'white', marginBottom: "-60px" }} >Online Project Management</span>
          </div>
        </div>

        <div style={{ marginTop: "70px" }} className="sub-div1">

          <form style={{ border: "1px solid ", height: "480px", width: "441px", margin: "auto", borderRadius: "4%", background: 'white' }} onSubmit={handleFormSubmit}>
            <center><div style={{ color: "gray", padding: "20px", fontSize: "20px" }}>Login to get started</div></center>

            <div className="mb-3" style={{ padding: "10px 32px  " }} >

              <label htmlFor="Email">Email:</label><br />
              <input type="text" id="Email" name="Email" value={email} onChange={handleEmailChange} placeholder="Email" style={{ width: "350px", height: "50px", borderRadius: "4px", marginTop: "9px" }}  /><br /><br />
              {emailError && <div className='error-msg'>{emailError}</div>}
              <label for="formGroupExampleInput2" class="form-label">Password :</label><br />
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} style={{ width: "100%", height: "50px", borderRadius: "4px", marginTop: "9px", position: "relative" }} /><br></br>
              <button type="button" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', outline: 'none', cursor: 'pointer', fontSize: "20px", marginRight: "74px", marginTop: "10px" }} onClick={handleTogglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {passwordError && <div className='error-msg danger'>{passwordError}</div>}
            </div>

            <Link href="#" style={{ margin: "5px 250px  " }}>
              Forgot Password ?
            </Link>

            <Button style={{ margin: "31px 135px  60px", width: "180px", height: "30px", borderRadius: "30px" }} type='submit' variant='contained' color='primary'>Login</Button>


          </form>
        </div>
      </div>
    </>
  )
}


export default Login
