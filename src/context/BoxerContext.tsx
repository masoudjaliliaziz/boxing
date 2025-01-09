import React, { createContext, useContext, useEffect, useReducer } from "react";

type User = {
  id: number;
  name: string;
  lastName: string;
  role: string;
  age: number;
};
const BoxerContext = createContext(null);

const initialState = {
  user: [],
};
function BoxerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("http://localhost:8000/boxers");
      const data = await res.json();
      dispatch({ type: "getUser", payload: data });
    }
    fetchUser();
  }, []);
  const { user } = state;
  function reducer(state, action) {
    switch (action.type) {
      case "getUser":
        return { ...state, user: action.payload };
    }
  }

  return (
    <BoxerContext.Provider value={{ user }}>{children}</BoxerContext.Provider>
  );
}

function useBoxer() {
  const context = useContext(BoxerContext);
  if (!context) {
    throw new Error("useBoxer must be used within a BoxerProvider");
  }
  return context;
}

export { BoxerProvider, useBoxer };
