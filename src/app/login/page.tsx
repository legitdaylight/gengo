import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase";
import SignInButton from "../Components/SignInButton";

export default function LoginPage() {

    return (
        <div className="flex h-screen">
            <div className="w-1/3 bg-japan-500 flex flex-col justify-center items-center pb-48">
                <div className="select-none text-justify pb-4 text-2xl text-white">
                    <h1><span className="font-bold">Sign In</span> to Gengo</h1>
                    <h2>and elevate your Japanese learning journey.</h2>
                </div>
                <div className="w-4/5 mb-2">
                    <hr className="w-full border-t border-gray-300 my-2"/>
                </div>
                <SignInButton />
            </div>

            <div className="w-2/3 h-screen relative">
                <img src="/tokyo.png" className="object-cover w-full h-full"></img>
            </div>
        </div>
    )
}