import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleProvider } from '../../firebase/config';
import { useRouter } from 'next/navigation'

const SignInButton = () => {
    const router = useRouter()

    const handleGoogleLogin = async() => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("User:", result.user);
            router.push("/")

        } catch (err) {
            console.error(err);
        }
    }

  return (
    <div>
        <button onClick={handleGoogleLogin} className="px-4 py-2 border flex gap-3 bg-white hover:bg-gray-50 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 cursor-pointer">
            <img className="w-6 h-6" src="/Google_logo.svg" loading="lazy" alt="google logo"/>
            <p>Sign in with Google</p>
        </button>
    </div>
  )
}

export default SignInButton