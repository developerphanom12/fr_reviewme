const initialState = {
    user: {},
    userCheck: false,
    role: "",
  };
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_DATA":
        return {
          ...state,
          user: action.payload,
        };
      case "USER_CHECK":
        return {
          ...state,
          userCheck: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;
  