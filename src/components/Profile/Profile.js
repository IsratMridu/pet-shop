import React from 'react';
import useAuth from '../Context/useAuth';

const Profile = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            {
                user.email?
                <div className="bg-info py-5">
                    <h1>Name: {user.displayName}</h1>
                    <h1>Email: {user.email}</h1>
                    <img src={user.photoURL} className="img-fluid" alt="user_img"/>
                    <h1>Provider Id: {user.providerId}</h1>
                    <h1>Uid: {user.uid}</h1>
                
                </div>
                :
                <div>
                    <h1>Login First To See Profile Information</h1>
                </div>
            }
            
        </div>
    );
};

export default Profile;