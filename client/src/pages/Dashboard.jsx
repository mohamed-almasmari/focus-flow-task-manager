import React from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const {user} =useSelector((state)=>state.auth);
  
  return <div>Dashboard  {user}</div>;
};
export default Dashboard;
