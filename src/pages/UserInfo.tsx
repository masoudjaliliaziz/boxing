import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useBoxer } from "../context/BoxerContext";
import { getAgeRange } from "../util/getBoxerRange";

function UserInfo() {
  const params = useParams();
  const { id } = params;
  const { getUserById, userI } = useBoxer();
  useEffect(() => {
    getUserById(id);
  }, [id, getUserById]);

  return (
    <>
      <div>{userI?.name}</div>
      <h1>{userI ? getAgeRange(userI.birth) : "nothing"}</h1>
    </>
  );
}

export default UserInfo;
