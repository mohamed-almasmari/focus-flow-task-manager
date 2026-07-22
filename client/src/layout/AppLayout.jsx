import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import MobileSidebar from "../components/sidebar/MobileSidebar.jsx";

const AppLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 h-screen bg-white sticky top-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <MobileSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Navbar />

        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
