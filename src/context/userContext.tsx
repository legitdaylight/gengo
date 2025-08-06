'use client'

import { auth } from "@/firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

interface UserContextType {
    user: User | null;
}

export const userContext = createContext<UserContextType | null>(null)

const UserProvider = (props) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => unsubscribe();
    }, []);
    
    return (
    <userContext.Provider value={{user}}>
        {props.children}
    </userContext.Provider>)
}

export default UserProvider
