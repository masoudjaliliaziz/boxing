import React from "react";
import { Link } from "react-router";
import { useBoxer } from "../context/BoxerContext";
import { User } from "../Types/types";
import { getAgeRange } from "../util/getBoxerRange";
import { getIdeadline } from "../util/getIdeadline";
import { getSdeadline } from "../util/getSdeadlline";
type Props = {
  user: User;
};

function UserItem({ user }: Props) {
  const { userI } = useBoxer();
  const isIDedline = getIdeadline(user.Ideadline);
  const isSDedline = getSdeadline(user.Sdeadline);

  return (
    <Link to={`/${user.id}`}>
      <div
        className={`w-2/3 h-10 flex justify-start gap-5 items-center rounded-lg p-6 bg-slate-700 ${
          userI?.id === user.id ? "active" : ""
        }`}
      >
        <h1 className="font-bold text-white">{user.name}</h1>
        <h1 className="font-bold text-white">{user.lastName}</h1>
        <h1 className="font-bold text-white">{user.age}</h1>
        <h1
          style={isIDedline ? { color: "red" } : { color: "green" }}
          className={`font-bold text-white  `}
        >
          {isIDedline ? "Expired insurance" : "still have insurance"}
        </h1>
        <h1
          style={isSDedline ? { color: "red" } : { color: "green" }}
          className={`font-bold text-white  `}
        >
          {isSDedline ? "موعد پرداخت شهریه" : "شهریه واریز شده"}
        </h1>
        <h1 className="font-bold text-white">
          {user ? getAgeRange(user.birth) : "undefined"}
        </h1>
      </div>
    </Link>
  );
}

export default UserItem;
