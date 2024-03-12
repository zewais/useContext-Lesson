import { createContext, useContext, useState } from "react";

//create context to provide which theme to use in the application
const ThemeContext = createContext();

//create context to provide a function to handle the current state of toggling
const ThemeUpdateContext = createContext();

//to provide a custom hook
export function useTheme() {
  return useContext(ThemeContext);
}

//to provide a custom hook
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

//The main provider that will enable moving props down to any level of children
export function ThemeProvider({ children }) {
  //store the state
  const [darkTheme, setDarkTheme] = useState(true);

  //provide a function to change the state
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  //the main return is to have a provider for each of the functions above. One to store the state and one to provide the toggle function
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
