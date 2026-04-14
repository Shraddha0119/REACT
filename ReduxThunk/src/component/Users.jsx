import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAPI } from "../Redux/userSlice";

const Users = () => {
  const userState = useSelector((state) => state.user);
//   console.log(userState.loading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAPI());
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Users</h1>
      {userState.loading===false&&userState.data.map((item,index)=>(
        <>
        <h2>Data</h2>
        <h3>{item.id} {item.name}</h3>
        </>
      ))}
    </div>
  );
};

export default Users;