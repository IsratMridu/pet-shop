import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';


const Register = () => {
    const { handleEmail, handlePassword, handleAddUser} = useAuth();
    return (
        <div>
            <div className="container row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                <div className="col">
                <h1 className="text-danger mt-5">Create Account Using Email and Password.</h1>
                    <form onSubmit={handleAddUser}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleEmail}  required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onBlur={handlePassword}  required/>
  </div>

  <input type="submit" value="Register"  className="bg-danger px-3 py-2 rounded-3 text-white"/>

  <NavLink to="/login">
      <p  className="pt-5">Already Have An Account?</p>
  </NavLink>


 
  
</form>



                </div>
                <div className="col">
                    <img src="https://image.freepik.com/free-vector/modern-online-registration-compositio_23-2147993862.jpg" alt="registration_image" className="img-fluid" />

                </div>
            </div>
        </div>
    );
};

export default Register;