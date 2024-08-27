import { useState } from "react";
import { useEffect } from "react";
const { createContext } = require("react");
const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [dark, setDark] = useState(true);
    const THEME_KEY = "theme";

    useEffect(()=>{
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme !== null) {
            setDark(savedTheme);
            return;
        }

        const isSystemThemeDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        setDark(isSystemThemeDark === true);
    }, []);

    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider };
export default ThemeContext;