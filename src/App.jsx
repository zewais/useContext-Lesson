import "./App.css";
import ContextComponent from "./components/ContextComponent";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    //use the main provider as a wrapper for any component that needs to access the state
    <ThemeProvider>
      <ContextComponent />
    </ThemeProvider>
  );
}

export default App;
