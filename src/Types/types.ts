export type User = {
  id: string;
  name: string;
  lastName: string;
  role: string;
  age: number;
  Ideadline: string;
  phoneNumber: string;
  km: string;
  Sdeadline: string;
  birth: string;
};

//for value of BoxContext provider
export type BoxerContextType = {
  user: User[];
  getUserById: (id: string) => Promise<void>;
  userI: User | undefined;
};

//for state of useReducer in BoxContext
export type State = {
  user: User[];
  userI: undefined | User;
};

//for action of reducer function in useReducer that used in BoxContext
export type Action =
  | { type: "getUser"; payload: User[] }
  | { type: "getUserById"; payload: User };

export type ageRanges = {
  start: string;
  end: string;
  label: string;
};
