import { useState } from "react";
import { useEffect } from "react";
const { createContext } = require("react");
const ThemeContext = createContext();
const THEME_KEY = "theme";

function ThemeProvider({children}) {

    const getInitialTheme = () => {
        const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
        if (savedTheme !== null) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [dark, setDark] = useState(getInitialTheme);

    const saveThemeToLocalStorage = (theme) => {
        localStorage.setItem(THEME_KEY, JSON.stringify(theme));
    }

    useEffect(()=>{
        const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));

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
        <ThemeContext.Provider value={{dark, setDark, saveThemeToLocalStorage}}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider };
export default ThemeContext;
