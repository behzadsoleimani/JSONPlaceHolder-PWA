const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload, posts: [], comments: [] };

    case "GET_POSTS":
      return { ...state, posts: action.payload, comments: [] };

    case "GET_COMMENTS":
      return { ...state, comments: action.payload };

    default:
      return state;
  }
};

export default reducer;
