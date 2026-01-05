import React from "react";
import { useWeather } from "../contexts/weatherContext";

const Input = (props) => {
    const { searchQuery, setSearchQuery } = useWeather();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && props.onEnter) {
            props.onEnter();
        }
    };

    return (
        <input
            value={searchQuery}
            autoFocus={true}
            placeholder={props.placeholder}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border border-zinc-700 focus:border-zinc-800 focus:outline-none rounded-md p-2 w-full bg-zinc-800 text-zinc-300"
        />
    );
};
export default Input;