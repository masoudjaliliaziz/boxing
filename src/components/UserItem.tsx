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
        className={`w-2/3 h-10 flex justify-around gap-5 items-center rounded-lg p-6 bg-slate-800 ${
          userI?.id === user.id ? "active" : ""
        }`}
      >
        <h1 className="font-bold text-white w-9">{user.name}</h1>
        <h1 className="font-bold text-white w-9">{user.lastName}</h1>
        <h1 className="font-bold text-white w-9">{user.age}</h1>
        <h1
          style={
            isIDedline.expired
              ? { color: "red" } // اگر منقضی شده باشد، رنگ قرمز
              : isIDedline.daysRemaining <= 10
              ? { color: "orange" } // اگر روزهای باقی‌مانده کمتر از یا مساوی 10 باشد، رنگ نارنجی
              : { color: "green" } // در غیر این صورت، رنگ سبز
          }
          className={`font-bold text-white w-15  `}
        >
          {isIDedline.expired
            ? "Expired insurance"
            : `still have insurance (${isIDedline.daysRemaining})d`}
        </h1>
        <h1
          style={
            isSDedline.expired
              ? { color: "red" } // اگر منقضی شده باشد، رنگ قرمز
              : isSDedline.daysRemaining <= 10
              ? { color: "orange" } // اگر روزهای باقی‌مانده کمتر از یا مساوی 10 باشد، رنگ نارنجی
              : { color: "green" } // در غیر این صورت، رنگ سبز
          }
          className={`font-bold text-sm text-white w-15  `}
        >
          {isSDedline.expired
            ? " Membership expired"
            : `still have membership (${isSDedline.daysRemaining})days`}
        </h1>
        <h1 className="font-bold text-white w-9 text-center">
          {user ? getAgeRange(user.birth) : "undefined"}
        </h1>
      </div>
    </Link>
  );
}

export default UserItem;
