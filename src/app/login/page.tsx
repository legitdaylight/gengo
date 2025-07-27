import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase";

export default function LoginPage() {
    const handleGoogleLogin = async() => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("User:", result.user); // Contains name, email, photo, etc.
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1 className="">Join GenGo and elevate your Japanese learning journey!</h1>
            <div className="border border-solid border-gray-500 p-4 cursor-pointer">
                <button onClick={handleGoogleLogin}>Sign in With Google</button>
            </div>
        </div>
    )
}