import { Outlet } from "react-router-dom";

const AppLayout = () => {
  
  return (
    <div className="text-center">
      <h1> Main Layout </h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default AppLayout;
