import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
const AppLayout = () => {
  return (
    <div className="text-center">
      <h1> Main Layout </h1>
      <div className="flex ">
        <Sidebar />
        <div className="bg-amber-500 flex-1 h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
