import AdminPage from "./AdminPage"
import React from "react";
import UserPage from "./UserPage"
export const Authentication = (props) => {
  // console.log(props.values);

  const role = props.values.role;
  // console.log(role);
  if (role === "admin") {
    return <AdminPage />;
  } else if (role === "user") {
    return <UserPage />;
  }
};
