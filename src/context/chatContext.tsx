'use client'

import { createContext, Dispatch, SetStateAction, useState } from "react";
import chatGemini from "@/config/gemini"

type GeminiContextType = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  onSent: () => Promise<void>;
};

export const Context = createContext<GeminiContextType | null>(null)

const ContextProvider = (props) => {
    const [input, setInput] = useState("");


    const onSent = async() => {
        console.log("Input: ", input)
        await chatGemini(input)
    }

    const contextValue = {
        onSent,
        input,
        setInput,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider