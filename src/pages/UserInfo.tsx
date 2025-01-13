import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import { useBoxer } from "../context/BoxerContext";
import { getAgeRange } from "../util/getBoxerRange";
import moment from "moment-jalaali";

function UserInfo() {
  const params = useParams();
  const { id } = params;
  const { getUserById, userI } = useBoxer();
  useEffect(() => {
    getUserById(id);
  }, [id, getUserById]);
  function convertToJalali(isoDate) {
    // تبدیل تاریخ ISO به تاریخ شمسی
    const jalaliDate = moment(isoDate).format("jYYYY/jMM/jDD");
    return jalaliDate;
  }
  return (
    <>
      {" "}
      <div
        className=" w-full h-dvh flex flex-col gap-5 pl-10 py-5 justify-start bg-black relative after:bg-center after:absolute after:inset-0  after:bg-cover after:bg-[url('./src/assets/images/view-pair-boxing-gloves.jpg')] after:z-10
   after:pointer-events-none after:opacity-40"
      >
        <div className="info relative z-20 bg-slate-800 w-3/12 rounded-lg flex-col p-3 font-bold text-white">
          <div className=" flex flex-col gap-5 justify-center items-start w-full">
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">name</h1>
              <h1>{` ${userI?.name}`}</h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">last name</h1>
              <h1>{` ${userI?.lastName}`}</h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">birth date</h1>
              <h1>{convertToJalali(userI?.birth)}</h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">age</h1>
              <h1>{` ${userI?.age}`}</h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">national date</h1>
              <h1>{userI?.km}</h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">phone Number</h1>
              <h1>{` ${userI?.phoneNumber}`}</h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">age range</h1>
              <h1>{getAgeRange(userI?.birth)}</h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">insurance date paid</h1>
              <h1>{convertToJalali(userI?.Ideadline)}</h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center">
              <h1 className="text-red-600">Membership Fee date</h1>
              <h1>{convertToJalali(userI?.Sdeadline)}</h1>
            </div>
          </div>
        </div>
        <Link to={`/formEdit/${id}`}>
          <button
            type="submit"
            className="bg-slate-800 font-bold  rounded-lg p-3 relative z-20 w-1/12 text-blue-400"
          >
            EDIT
          </button>
        </Link>
      </div>
    </>
  );
}

export default UserInfo;
