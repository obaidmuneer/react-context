import { GlobalContext } from "../../context/context";
import { useContext, useState } from "react";

const User = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [name, setName] = useState("");

  const addUser = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADD_USER",
      payload: {
        name: name,
      },
    });
  };
  return (
    <div>
      <h1>User</h1>
      <form onSubmit={addUser} >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Add User</button>
      </form>
      <p>name : {state?.user?.name}</p>
    </div>
  );
};

export default User;
