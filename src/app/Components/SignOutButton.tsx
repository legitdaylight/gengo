import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../../firebase';


const SignOutButton = () => {
    const handleSignOut = async() => {
        try {
            await signOut(auth);
            console.log("User signed out");

        } catch (err) {
            console.error(err);
        }
    }

  return (
    <div className="border border-solid border-gray-500 p-4 cursor-pointer">
        <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default SignOutButton