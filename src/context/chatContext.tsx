'use client'

import { createContext, Dispatch, SetStateAction, use, useState } from "react";
import chatGemini from "@/config/gemini"

type GeminiContextType = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  onSent: () => Promise<void>;
  resultData: string;
  setResultData: Dispatch<SetStateAction<string>>;
  chatHistory: History[];
  setChatHistory: Dispatch<SetStateAction<History[]>>;
};

type History = {
    role: string,
    parts: {text: string}[];
}

export const Context = createContext<GeminiContextType | null>(null)

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [resultData, setResultData] = useState("")
    const [chatHistory, setChatHistory] = useState<History[]>([])

    const userMessage = {
        role: 'user',
        parts: [{text: input}]
    }

    const onSent = async() => {
        const newHistory = [...chatHistory, userMessage]
        setChatHistory(newHistory)
        const result = await chatGemini(newHistory)
        setResultData(result ?? "Error")
        //let boldArray = result?.split("**")!
        //let newResult = ""
        //for(let i = 0; i < boldArray?.length!; i++){
        //    if(i%2 == 0){
        //        newResult += boldArray[i]
        //    }
        //    else{
        //        newResult += "<b>"+boldArray[i]+"</b>"
        //    }
        //}
        //const formatResult = newResult.split("*").join("</br>")
        const modelResponse = {
            role: 'model',
            parts: [{text: result ?? "Error"}]
        }
        setChatHistory([...newHistory, modelResponse])
        setInput("")
    }

    const contextValue = {
        onSent,
        input,
        setInput,
        resultData,
        setResultData,
        chatHistory,
        setChatHistory
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider