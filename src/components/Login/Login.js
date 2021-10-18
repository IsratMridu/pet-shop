import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';


const Login = () => {
    const {handleGoogleSignIn, handleEmail, handlePassword, handleRegister } = useAuth();
    return (
        <div>
            <div className="row container">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                    <h1 className="text-danger">Login Using Email and Password.</h1>
                    <form onSubmit={handleRegister}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleEmail}  required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onBlur={handlePassword} required/>
  </div>

  <input type="submit" value="Submit"  className="bg-danger px-3 py-2 rounded-3 text-white"/>

  


 
  
</form>

<h1 className="my-5 text-danger">Or</h1>

<button className="btn btn-success" onClick={handleGoogleSignIn}>Sign In With Google</button>

<NavLink to="/register">
    <p className="pt-5">Don't Have An Account?</p>
  </NavLink>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">

                  <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid" alt="login_image" />

                </div>

            </div>
            
        </div>
    );
};

export default Login;