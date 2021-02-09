import React, { createContext, useContext, useReducer } from "react";
import reduser from "./reducer";
import actions from "./actions";

const Context = createContext({});

interface IState {
  users?: any[];
  posts?: any[];
  comments?: any[];
}

function AppProvider(props: any) {
  const initialState: IState = {
    users: [],
    posts: [],
    comments: []
  };

  const [state, dispatch] = useReducer(reduser, initialState);
  return (
    <Context.Provider value={{ ...state, ...actions(dispatch) }}>
      {props.children}
    </Context.Provider>
  );
}
const AppItems = () => useContext(Context);
export { AppProvider, Context, AppItems };
