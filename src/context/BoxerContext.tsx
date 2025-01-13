import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Action, BoxerContextType, State } from "../Types/types";

type Props = {
  children: React.ReactNode;
};

const BoxerContext = createContext<BoxerContextType | null>(null);

const initialState: State = {
  user: [],
  userI: undefined,
};

function BoxerProvider({ children }: Props) {
  const getUserById = useCallback(async function getUserById(
    id: string
  ): Promise<void> {
    try {
      const res = await fetch(`http://localhost:8000/boxers/${id}`);

      if (!res.ok) {
        // بررسی وضعیت پاسخ، در صورتی که موفق نباشد
        console.error(`Error fetching data for ID: ${id}`, res.statusText);
        return;
      }

      const data = await res.json();
      dispatch({ type: "getUserById", payload: data });
    } catch (error) {
      console.error("Error:", error);
    }
  },
  []);

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
