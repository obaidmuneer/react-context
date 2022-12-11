export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, num: state.num + 1 };
    case "sub":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};
