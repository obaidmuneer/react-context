import { GlobalContext } from "../../context/context";
import { useContext } from "react";

const Counter = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const add = () => {
    dispatch({ type: "add" });
  };
  const sub = () => {
    dispatch({
      type: "sub",
    });
  };
  return (
    <div>
      <h1>Counter {state.num}</h1>
      <button onClick={add}>Add Num</button>
      <button onClick={sub}>Minus Num</button>
    </div>
  );
};

export default Counter;
