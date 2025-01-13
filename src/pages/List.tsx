import React from "react";
import Navbar from "../components/Navbar";
import { useBoxer } from "../context/BoxerContext";
import UserItem from "../components/UserItem";
import { User } from "../Types/types";

function List() {
  const { user } = useBoxer();
  return (
    <div
      className=" w-full h-dvh flex flex-col pl-10 py-5 justify-start bg-black relative after:bg-center after:absolute after:inset-0  after:bg-cover after:bg-[url('./src/assets/images/view-pair-boxing-gloves.jpg')] after:z-10
     after:pointer-events-none after:opacity-40"
    >
      <Navbar />
      <div className="flex flex-col gap-3 z-20">
        {user.map((user: User) => {
          return <UserItem user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
}

export default List;
