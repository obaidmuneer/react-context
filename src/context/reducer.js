export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NUM":
      return { ...state, num: state.num + 1 };
    case "SUB_NUM":
      return { ...state, num: state.num - 1 };
    case "ADD_USER":
      return { ...state, user: action.payload };
    case "DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};
