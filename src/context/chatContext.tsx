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
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
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
    const [loading, setLoading] = useState(false)

    const userMessage = {
        role: 'user',
        parts: [{text: input}]
    }

    const onSent = async() => {
        setLoading(true)
        const newHistory = [...chatHistory, userMessage]
        setChatHistory(newHistory)
        const result = await chatGemini(newHistory)
        setResultData(result ?? "Error")
        const modelResponse = {
            role: 'model',
            parts: [{text: result ?? "Error"}]
        }
        setChatHistory([...newHistory, modelResponse])
        setInput("")
        setLoading(false)
    }

    const contextValue = {
        onSent,
        input,
        setInput,
        resultData,
        setResultData,
        chatHistory,
        setChatHistory,
        loading,
        setLoading
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider