'use client'

import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../firebase/config';
import { useRouter } from 'next/navigation'

const SignOutButton = () => {
    const router = useRouter()

    const handleSignOut = async() => {
        try {
            await signOut(auth);
            console.log("User signed out");
            router.push('/login');

        } catch (err) {
            console.error(err);
        }
    }

  return (
    <div className="border border-solid border-gray-500 p-4 cursor-pointer" onClick={handleSignOut}>
        <button>Sign Out</button>
    </div>
  )
}

export default SignOutButton