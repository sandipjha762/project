import { Children, useContext, useState } from "react"
import ThemeContext from "./ThemeContext";

const ThemeToggle = (props) => {
    const [theme, setTheme] = useState('white');

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }
    return(
        <ThemeContext.provider value={{theme, toggleTheme}}>
            {Children}
        </ThemeContext.provider>
    )
}

export default ThemeToggle;