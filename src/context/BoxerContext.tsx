import React, { createContext, useContext, useEffect, useReducer } from "react";

type User = {
  id: number;
  name: string;
  lastName: string;
  role: string;
  age: number;
  Ideadline: string;
};
type BoxerContextType = {
  user: User[];
  getUserById: (id: number) => Promise<void>;
  userI: User | undefined;
};
type State = {
  user: User[];
  userI: undefined | User;
};
type Action =
  | { type: "getUser"; payload: User[] }
  | { type: "getUserById"; payload: User };

type Props = {
  children: React.ReactNode;
};

const BoxerContext = createContext<BoxerContextType | null>(null);

const initialState: State = {
  user: [],
  userI: undefined,
};

function BoxerProvider({ children }: Props) {
  async function getUserById(id: number): Promise<void> {
    const res = await fetch(`http://localhost:8000/boxers/${id}`);
    const data = await res.json();
    dispatch({ type: "getUserById", payload: data });
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("http://localhost:8000/boxers");
      const data = await res.json();
      dispatch({ type: "getUser", payload: data });
    }
    fetchUser();
  }, []);
  const { user, userI } = state;
  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "getUser":
        return { ...state, user: action.payload };
      case "getUserById":
        return { ...state, userI: action.payload };
    }
  }

  return (
    <BoxerContext.Provider value={{ user, userI, getUserById }}>
      {children}
    </BoxerContext.Provider>
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
