import { GlobalContext } from "./context/context";
import { useContext, useState } from "react";
import Counter from "./components/counter";
import User from "./components/user";
import "./App.css";

function App() {
  const { state, dispatch } = useContext(GlobalContext);
  const [isCounter, setIsCounter] = useState(false);
  const darkMode = () => {
    dispatch({
      type: "DARK_MODE",
    });
    console.log(state.darkMode);
  };
  return (
    <div className={`App ${state.darkMode ? "App-bg" : ""}`}>
      <button onClick={darkMode}>
        Turn {state.darkMode ? "Off" : "On"} Dark Mode
      </button>
      {isCounter ? <Counter /> : <User />}
      <br />

      <button onClick={() => setIsCounter(!isCounter)}>Show {isCounter ? "User" : "Counter"}</button>
    </div>
  );
}

export default App;
