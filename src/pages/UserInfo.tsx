import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { useBoxer } from "../context/BoxerContext";
type User = {
  id: number;
  name: string;
  lastName: string;
  role: string;
  age: number;
  Ideadline: string;
};
function UserInfo() {
  const params = useParams();
  const { id } = params;
  const { getUserById, userI } = useBoxer();
  useEffect(() => {
    getUserById(Number(id));
  }, [getUserById, id]);
  return <div>{userI?.name}</div>;
}

export default UserInfo;
