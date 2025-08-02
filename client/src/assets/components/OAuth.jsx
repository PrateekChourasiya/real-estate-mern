import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../../firebase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleAuth = async () => {
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            console.log(result);
            
            const res = await fetch('api/auth/google', {
                method : 'POST',
                headers: {'Content-Type' : 'application/json',},
                body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL}),
            });

            const data = await res.json();
            console.log("google‑login payload:", data);
            dispatch(signInSuccess(data));
            navigate('/')
        }
        catch(error){
            console.log("could not sign in with google: ", error);
        }
    }
    return (
        <button onClick = {handleGoogleAuth} type="button" className='bg-slate-500 text-white rounded-lg p-3 uppercase hover:opacity-95'>Continue with Google</button>
    )
}
