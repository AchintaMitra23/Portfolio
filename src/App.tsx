import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [theme, setTheme] = useState("dark");
  return <NavBar theme={theme} setTheme={setTheme} />;
}

export default App;
