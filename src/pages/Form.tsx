import React, { useState, useReducer } from "react";
import moment from "moment-jalaali";
import Navbar from "../components/Navbar";
import { getSdeadline } from "../util/getSdeadlline";
import { getIdeadline } from "../util/getIdeadline";
moment.loadPersian({ dialect: "persian-modern" });
const initialState = {
  bday: "",
  bmonth: "",
  byear: "",
  birthDate: "",
  sday: "",
  smonth: "",
  syear: "",
  salaryDate: "",
  iday: "",
  imonth: "",
  iyear: "",
  insuranceDate: "",
  name: "",
  lastName: "",
  role: "",
  phoneNumber: "",
  km: "",
  age: "",
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
  }
}

function Form() {
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
      const res = await fetch("http://localhost:8000/boxers", {
        method: "POST", // روش ارسال داده‌ها
        headers: {
          "Content-Type": "application/json", // فرمت داده‌ها به JSON
        },
        body: JSON.stringify(boxerData), // داده‌های ارسالی در قالب JSON
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error converting date:", error.message);
      alert("Invalid date format!");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault(); // جلوگیری از رفرش شدن صفحه
          handleConvert(); // فراخوانی تابع تبدیل
        }}
      >
        <div className="flex flex-col gap-3 p-3">
          <label htmlFor="name">name</label>
          <input
            id="name"
            className="bg-slate-100"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) =>
              dispatch({ type: "set/name", payload: e.target.value })
            }
          />
          <label htmlFor="lastName">last Name</label>
          <input
            id="lastName"
            className="bg-slate-100"
            placeholder="last name"
            type="text"
            value={lastName}
            onChange={(e) =>
              dispatch({ type: "set/lastName", payload: e.target.value })
            }
          />{" "}
          <label htmlFor="phoneNumber">phone number</label>
          <input
            id="phoneNumber"
            placeholder="phoneNumber"
            className="bg-slate-100"
            type="text"
            value={phoneNumber}
            onChange={(e) =>
              dispatch({ type: "set/phoneNumber", payload: e.target.value })
            }
          />
          <label htmlFor="km">national ID</label>
          <input
            id="km"
            placeholder="km"
            className="bg-slate-100"
            type="text"
            value={km}
            onChange={(e) =>
              dispatch({ type: "set/km", payload: e.target.value })
            }
          />
          <label htmlFor="role">role</label>
          <input
            id="role"
            placeholder="role"
            className="bg-slate-100"
            type="text"
            value={role}
            onChange={(e) =>
              dispatch({ type: "set/role", payload: e.target.value })
            }
          />
        </div>

        {/* //birth date */}
        <div className="flex flex-row gap-3 p-3">
          <label htmlFor="birthDay">day</label>
          <input
            id="birthDay"
            className="bg-slate-100"
            type="text"
            placeholder="00"
            value={bday}
            onChange={(e) =>
              dispatch({ type: "set/bday", payload: e.target.value })
            }
          />
          <label htmlFor="birthMonth">month</label>
          <input
            id="bithMonth"
            className="bg-slate-100"
            placeholder="00"
            type="text"
            value={bmonth}
            onChange={(e) =>
              dispatch({ type: "set/bmonth", payload: e.target.value })
            }
          />{" "}
          <label htmlFor="birthYear">year</label>
          <input
            id="birthYear"
            placeholder="0000"
            className="bg-slate-100"
            type="text"
            value={byear}
            onChange={(e) =>
              dispatch({ type: "set/byear", payload: e.target.value })
            }
          />
        </div>
        {/* insuranse date */}
        <div className="flex flex-row gap-3 p-3">
          <label htmlFor="iday">day</label>
          <input
            id="iday"
            className="bg-slate-100"
            type="text"
            placeholder="00"
            value={iday}
            onChange={(e) =>
              dispatch({ type: "set/iday", payload: e.target.value })
            }
          />
          <label htmlFor="imonth">month</label>
          <input
            id="imonth"
            className="bg-slate-100"
            placeholder="00"
            type="text"
            value={imonth}
            onChange={(e) =>
              dispatch({ type: "set/imonth", payload: e.target.value })
            }
          />{" "}
          <label htmlFor="iyear">year</label>
          <input
            id="iyear"
            placeholder="0000"
            className="bg-slate-100"
            type="text"
            value={iyear}
            onChange={(e) =>
              dispatch({ type: "set/iyear", payload: e.target.value })
            }
          />
          <button type="submit" className="bg-blue-500 text-white  rounded">
            Submit Birth Date
          </button>
        </div>
        {/* salary date */}
        <div className="flex flex-row gap-3 p-3">
          <label htmlFor="sday">day</label>
          <input
            id="sday"
            className="bg-slate-100"
            type="text"
            placeholder="00"
            value={sday}
            onChange={(e) =>
              dispatch({ type: "set/sday", payload: e.target.value })
            }
          />
          <label htmlFor="smonth">month</label>
          <input
            id="smonth"
            className="bg-slate-100"
            placeholder="00"
            type="text"
            value={smonth}
            onChange={(e) =>
              dispatch({ type: "set/smonth", payload: e.target.value })
            }
          />{" "}
          <label htmlFor="syear">year</label>
          <input
            id="syear"
            placeholder="0000"
            className="bg-slate-100"
            type="text"
            value={syear}
            onChange={(e) =>
              dispatch({ type: "set/syear", payload: e.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
