import { GlobalContext } from "../../context/context";
import { useContext } from "react";

const Counter = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const add = () => {
    dispatch({ type: "ADD_NUM" });
  };
  const sub = () => {
    dispatch({
      type: "SUB_NUM",
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
