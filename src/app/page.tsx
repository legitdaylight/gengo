"use client"

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import LoginPage from "./login/page";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => 
    {
      console.log("Auth state changed:", currentUser);
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return user ? <Dashboard /> : <LoginPage />;
}

export default App;