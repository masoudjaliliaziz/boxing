import React from "react";
import Navbar from "../components/Navbar";
import { useBoxer } from "../context/BoxerContext";
import UserItem from "../components/UserItem";
type User = {
  id: number;
  name: string;
  lastName: string;
  role: string;
  age: number;
  Ideadline: string;
};
function List() {
  const { user } = useBoxer();
  return (
    <div className=" w-full h-dvh flex flex-col pl-10 py-5 justify-start">
      <Navbar />
      <div className="flex flex-col gap-3">
        {user.map((user: User) => {
          return <UserItem user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
}

export default List;
