import React from "react";
import { getIsoDate } from "./../util/getIsoDate";
import { Link } from "react-router";
type User = {
  id: number;
  name: string;
  lastName: string;
  role: string;
  age: number;
  Ideadline: string;
};
type Props = {
  user: User;
};

function UserItem({ user }: Props) {
  const isDeadlinePassed = new Date(user.Ideadline) < new Date();

  return (
    <Link to={`/${user.id}`}>
      <div
        className={`w-2/3 h-10 flex justify-start gap-5 items-center rounded-lg p-3 bg-slate-700 `}
      >
        <h1 className="font-bold text-white">{user.name}</h1>
        <h1 className="font-bold text-white">{user.lastName}</h1>
        <h1 className="font-bold text-white">{user.age}</h1>
        <h1
          style={isDeadlinePassed ? { color: "red" } : { color: "green" }}
          className={`font-bold text-white  `}
        >
          {isDeadlinePassed ? "Expired insurance" : "still have insurance"}
        </h1>
      </div>
    </Link>
  );
}

export default UserItem;
