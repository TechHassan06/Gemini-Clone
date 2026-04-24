import { createContext, useState } from "react";
import runChat from "../Components/Config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState(() => {
        const stored = localStorage.getItem("gemini_prompts");
        return stored ? JSON.parse(stored) : [];
    });
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setResultData("");
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);

        const userPrompt = prompt !== undefined ? prompt : input;

        // ✅ Always record to history without duplicates
        setPreviousPrompts(prev => {
            const next = prev.includes(userPrompt) ? prev : [...prev, userPrompt];
            localStorage.setItem("gemini_prompts", JSON.stringify(next));
            return next;
        });
        setRecentPrompt(userPrompt);

        try {
            const response = await runChat(userPrompt);

            // Bold formatting
            let responseArray = response.split("**");
            let newResponse = "";
            for (let i = 0; i < responseArray.length; i++) {
                newResponse += i % 2 === 1
                    ? "<b>" + responseArray[i] + "</b>"
                    : responseArray[i];
            }

            // Formatting Line breaks
            let formatted = newResponse.split("\n").join("<br>");
            let words = formatted.split(" ");

            for (let i = 0; i < words.length; i++) {
                delayPara(i, words[i] + " ");
            }
        } catch (error) {
            console.error("Chat error:", error.message);
            setResultData("<b>Error:</b> Something went wrong or API limit reached. Please try again later.");
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const contextValue = {
        previousPrompts, setPreviousPrompts,
        onSent, setRecentPrompt, recentPrompt,
        showResult, loading, resultData,
        input, setInput, newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;