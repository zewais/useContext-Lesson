import { useTheme, useThemeUpdate } from "../contexts/ThemeContext";

export default function ContextComponent() {
  //create a variable for the custom hook that will have the state
  const darkTheme = useTheme();
  //create a custom hook that will provide the toggle function
  const toggleTheme = useThemeUpdate();
  //provide the styles as an object
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>This is Text</div>
    </>
  );
}
