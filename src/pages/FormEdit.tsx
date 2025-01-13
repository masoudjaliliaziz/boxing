import React, { useEffect, useReducer } from "react";

import { useBoxer } from "../context/BoxerContext";
import { Navigate, useNavigate, useParams } from "react-router";

import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });
function convertToJalali(isoDate) {
  // تبدیل تاریخ ISO به لحظه
  const momentDate = moment(isoDate);

  // بررسی معتبر بودن تاریخ
  if (!momentDate.isValid()) {
    return "تاریخ نامعتبر است";
  }

  // تبدیل تاریخ میلادی به شمسی
  const jalaliDate = momentDate.format("jYYYY/jMM/jDD");

  // جدا کردن روز، ماه و سال
  const [year, month, day] = jalaliDate.split("/");

  // بازگرداندن یک آبجکت شامل روز، ماه و سال
  return {
    year: parseInt(year, 10),
    month: parseInt(month, 10),
    day: parseInt(day, 10),
  };
}

function FormEdit() {
  const params = useParams();
  const { id } = params;
  const { getUserById, userI } = useBoxer();
  useEffect(() => {
    getUserById(id);
  }, [id, getUserById]);

  const ifullYear = convertToJalali(userI?.Ideadline);
  const sfullYear = convertToJalali(userI?.Sdeadline);
  const bfullYear = convertToJalali(userI?.birth);

  //   console.log(ifullYear);
  const initialState = {
    bday: bfullYear?.day,
    bmonth: bfullYear?.month,
    byear: bfullYear?.year,
    birthDate: userI?.birth,
    sday: sfullYear?.day,
    smonth: sfullYear?.month,
    syear: sfullYear?.year,
    salaryDate: userI?.Sdeadline,
    iday: ifullYear?.day,
    imonth: ifullYear?.month,
    iyear: ifullYear?.year,
    insuranceDate: userI?.Ideadline,
    name: userI?.name,
    lastName: userI?.lastName,
    role: "boxer",
    phoneNumber: userI?.phoneNumber,
    km: userI?.km,
    age: userI?.age,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "set/bday":
        return { ...state, bday: action.payload };
      case "set/bmonth":
        return { ...state, bmonth: action.payload };
      case "set/byear":
        return { ...state, byear: action.payload };
      case "set/birthDate":
        return {
          ...state,
          birthDate: action.payload.bithDate,
          age: action.payload.age,
        };
      case "set/iday":
        return { ...state, iday: action.payload };
      case "set/imonth":
        return { ...state, imonth: action.payload };
      case "set/iyear":
        return { ...state, iyear: action.payload };
      case "set/insuranceDate":
        return { ...state, insuranceDate: action.payload };
      case "set/name":
        return { ...state, name: action.payload };
      case "set/lastName":
        return { ...state, lastName: action.payload };
      case "set/phoneNumber":
        return { ...state, phoneNumber: action.payload };
      case "set/role":
        return { ...state, role: action.payload };
      case "set/km":
        return { ...state, km: action.payload };
      case "set/sday":
        return { ...state, sday: action.payload };
      case "set/smonth":
        return { ...state, smonth: action.payload };
      case "set/syear":
        return { ...state, syear: action.payload };
      case "set/salaryDate":
        return { ...state, salaryDate: action.payload };
      case "reset":
        return initialState;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    birthDate,
    byear,
    bmonth,
    bday,
    iday,
    imonth,
    iyear,
    insuranceDate,
    name,
    lastName,
    role,
    phoneNumber,
    km,
    age,
    sday,
    smonth,
    syear,
    salaryDate,
  } = state;
  const navigate = useNavigate();
  //   console.log(userI);
  const { setUser } = useBoxer();
  async function handleConvert() {
    try {
      //birth date------------------
      function calculateAge(birthDateISOString) {
        const birthDateMoment = moment(birthDateISOString);
        const today = moment();
        const age = today.diff(birthDateMoment, "years");
        return age;
      }

      const birthFullYear = `${byear}/${bmonth}/${bday}`;
      const gregorianBirthDate = moment(
        birthFullYear,
        "jYYYY/jMM/jDD"
      ).toISOString();
      const age = calculateAge(gregorianBirthDate);
      dispatch({
        type: "set/birthDate",
        payload: {
          bithDate: gregorianBirthDate,
          age,
        },
      });

      //insurance date--------------------
      const insuranceFullYear = `${iyear}/${imonth}/${iday}`;
      const gregorianInsuranceDate = moment(
        insuranceFullYear,
        "jYYYY/jMM/jDD"
      ).toISOString();
      dispatch({ type: "set/insuranceDate", payload: gregorianInsuranceDate });

      const salaryFullYear = `${syear}/${smonth}/${sday}`;
      const gregorianSalaryDate = moment(
        salaryFullYear,
        "jYYYY/jMM/jDD"
      ).toISOString();
      dispatch({ type: "set/salaryDate", payload: gregorianSalaryDate });

      const boxerData = {
        name,
        lastName,
        role,
        age,
        Ideadline: gregorianInsuranceDate,
        phoneNumber,
        km,
        birth: gregorianBirthDate,
        Sdeadline: gregorianSalaryDate,
      };
      const res = await fetch(`http://localhost:8000/boxers/${id}`, {
        method: "PUT", // روش ارسال داده‌ها
        headers: {
          "Content-Type": "application/json", // فرمت داده‌ها به JSON
        },
        body: JSON.stringify(boxerData), // داده‌های ارسالی در قالب JSON
      });
      const data = await res.json();
      //   setUser(data);
      console.log(data);
    } catch (error) {
      console.error("Error converting date:", error.message);
      alert("Invalid date format!");
    }
  }

  return (
    <div
      className="w-full h-dvh bg-black relative flex-col justify-start pl-10 py-5  after:bg-center after:absolute after:inset-0  after:bg-cover after:bg-[url('./src/assets/images/view-pair-boxing-gloves.jpg')] after:z-10
      after:pointer-events-none after:opacity-40 "
    >
      <form
        className="relative z-20 w-full  flex justify-start gap-5 items-center"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleConvert();
          navigate("/list");
        }}
      >
        <div className="flex flex-col gap-3 p-3 w-4/12 text-white">
          <label className="font-bold text-white" htmlFor="name">
            name
          </label>
          <input
            id="name"
            className="bg-slate-800 p-2 rounded-lg "
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) =>
              dispatch({ type: "set/name", payload: e.target.value })
            }
          />
          <label className="font-bold text-white" htmlFor="lastName">
            last Name
          </label>
          <input
            className="bg-slate-800 p-2 rounded-lg "
            id="lastName"
            placeholder="last name"
            type="text"
            value={lastName}
            onChange={(e) =>
              dispatch({ type: "set/lastName", payload: e.target.value })
            }
          />{" "}
          <label className="font-bold text-white" htmlFor="phoneNumber">
            phone number
          </label>
          <input
            className="bg-slate-800 p-2 rounded-lg "
            id="phoneNumber"
            placeholder="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) =>
              dispatch({ type: "set/phoneNumber", payload: e.target.value })
            }
          />
          <label className="font-bold text-white" htmlFor="km">
            national ID
          </label>
          <input
            className="bg-slate-800 p-2 rounded-lg "
            id="km"
            placeholder="km"
            type="text"
            value={km}
            onChange={(e) =>
              dispatch({ type: "set/km", payload: e.target.value })
            }
          />
          <label className="font-bold text-white" htmlFor="role">
            role
          </label>
          <input
            className="bg-slate-400 p-2 rounded-lg text-slate-500"
            id="role"
            placeholder="boxer"
            type="text"
            value={role}
            disabled={true}
          />
        </div>
        <div className="flex flex-col gap-3 p-3 w-4/12 justify-center items-center h-full text-white">
          {/* //birth date */}
          <h1 className="text-white font-bold ">BIRTH DATE</h1>
          <div className="flex flex-row gap-3 p-3 w-full items-center">
            <div className="flex flex-col w-1/3 justify-center gap-2">
              <input
                className="bg-slate-800 p-2 rounded-lg "
                id="birthDay"
                type="text"
                placeholder="day-[00]"
                value={bday}
                onChange={(e) =>
                  dispatch({ type: "set/bday", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/3 justify-center gap-2">
              {" "}
              <input
                className="bg-slate-800 p-2 rounded-lg "
                id="bithMonth"
                placeholder="month-[00]"
                type="text"
                value={bmonth}
                onChange={(e) =>
                  dispatch({ type: "set/bmonth", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/3 justify-center gap-2">
              <input
                className="bg-slate-800 p-2 rounded-lg "
                id="birthYear"
                placeholder="year-[0000]"
                type="text"
                value={byear}
                onChange={(e) =>
                  dispatch({ type: "set/byear", payload: e.target.value })
                }
              />
            </div>
          </div>
          {/* insuranse date */}
          <h1 className="text-white font-bold ">INSURANCE DATE</h1>
          <div className="flex flex-row gap-3 p-3 w-full">
            <div className="flex flex-col w-1/3 justify-center gap-2">
              {" "}
              <input
                className="bg-slate-800 p-2 rounded-lg "
                id="iday"
                type="text"
                placeholder="DAY-00"
                value={iday}
                onChange={(e) =>
                  dispatch({ type: "set/iday", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/3 justify-center gap-2">
              {" "}
              <input
                className="bg-slate-800 p-2 rounded-lg "
                id="imonth"
                placeholder="MONTH-00"
                type="text"
                value={imonth}
                onChange={(e) =>
                  dispatch({ type: "set/imonth", payload: e.target.value })
                }
              />{" "}
            </div>
            <div className="flex flex-col w-1/3 justify-center gap-2">
              <input
                className="bg-slate-800 p-2 rounded-lg "
                id="iyear"
                placeholder="YEAR-0000"
                type="text"
                value={iyear}
                onChange={(e) =>
                  dispatch({ type: "set/iyear", payload: e.target.value })
                }
              />
            </div>
          </div>

          {/* salary date */}
          <h1 className="text-white font-bold ">SALARY DATE</h1>
          <div className="flex flex-row gap-3 p-3 w-full ">
            <div className="flex flex-col w-1/3 justify-center gap-2">
              {" "}
              <input
                className="bg-slate-800 p-2 rounded-lg "
                id="sday"
                type="text"
                placeholder="DAY-00"
                value={sday}
                onChange={(e) =>
                  dispatch({ type: "set/sday", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/3 justify-center gap-2">
              {" "}
              <input
                className="bg-slate-800 p-2 rounded-lg "
                id="smonth"
                placeholder="MONTH-00"
                type="text"
                value={smonth}
                onChange={(e) =>
                  dispatch({ type: "set/smonth", payload: e.target.value })
                }
              />{" "}
            </div>
            <div className="flex flex-col w-1/3 justify-center gap-2 ">
              {" "}
              <input
                className="bg-slate-800 p-2 rounded-lg"
                id="syear"
                placeholder="YEAR-0000"
                type="text"
                value={syear}
                onChange={(e) =>
                  dispatch({ type: "set/syear", payload: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white  rounded-lg p-3"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormEdit;
