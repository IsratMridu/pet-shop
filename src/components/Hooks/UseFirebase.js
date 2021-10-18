import { GoogleAuthProvider, getAuth, signInWithPopup,  onAuthStateChanged, signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword   }  from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../FirebaseConfig/firebase.init";


initializeFirebase();




const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

const handleGoogleSignIn = () =>{

    
    signInWithPopup(auth, googleProvider)
    .then(result =>{
        
     
        console.log(result.user);
      
    
       
    })
} 

const handleLogOut = () =>{
    signOut(auth).then(() => {
        setUser({});
      })
}

const handleEmail = event =>{
    // console.log(event.target.value);
    setEmail(event.target.value);
    
}

const handlePassword = event =>{
    // console.log(event.target.value);
    setPassword(event.target.value);
    
}

 const handleAddUser = (event) =>{
    event.preventDefault();
    if(password.length <6){
        return;
    }
    else{
        //  console.log(email, password);
     createUserWithEmailAndPassword(auth, email, password)
     .then(result =>{
        //  console.log(result.user);

     })

    }
    

    

 }

 const handleRegister =(event) =>{
     event.preventDefault();
     signInWithEmailAndPassword(auth, email, password)
     .then(result =>{
         console.log(result.user);
     })

   
 }


 useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user)
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
 },[])


return {handleGoogleSignIn, user, handleLogOut, handleEmail, handlePassword, handleAddUser, handleRegister };

}

export default useFirebase;