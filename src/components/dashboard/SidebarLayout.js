// components/Sidebar.js
import { MdGroups } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav
      id="sidebar"
      className={`lg:min-w-[250px] w-max max-lg:min-w-8 transition-all duration-500 ${
        isSidebarOpen ? "w-max" : "max-lg:w-0 max-lg:invisible"
      }`}
    >
      <div
        id="sidebar-collapse-menu"
        className="bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99]"
      >
        <div className="pt-8 pb-2 px-6 sticky top-0 bg-white min-h-[80px] z-[100]">
          <button type="button" onClick={toggleSidebar}>
            {" "}
          </button>
        </div>
        <div className="py-6 px-6">
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="menu-item text-green-700 text-sm flex items-center cursor-pointer bg-[#d9f3ea] hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
              >
                <MdOutlineDashboard className="text-2xl mr-2" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/allTeachers"
                className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
              >
                <MdGroups className="text-2xl mr-2" />
                <span>All Teachers</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/teachersProfile"
                className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
              >
                <FaUser className="text-xl mr-2" />
                <span>Teacher Profile</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/allClasses"
                className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
              >
                <SiGoogleclassroom className="text-xl mr-2" />
                <span>All Classes</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
