import React from "react";
import Navbar from "../components/Navbar";
import { useBoxer } from "../context/BoxerContext";
type User = {
  id: number;
  name: string;
  lastName: string;
  role: string;
  age: number;
};
function List() {
  const { user } = useBoxer();
  return (
    <div className="flex justify-center">
      <Navbar />
      {user.map((user) => {
        return <h1>{user.name}</h1>;
      })}
    </div>
  );
}

export default List;
