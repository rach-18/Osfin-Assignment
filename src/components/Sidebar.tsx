import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeIcon from "@mui/icons-material/Home";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ShieldIcon from "@mui/icons-material/Shield";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Define the type for the menu items
interface MenuItem {
  icon: JSX.Element;
  label: string;
}

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Define the menu items with proper types
  const menuItems: MenuItem[] = [
    { icon: <FlightOutlinedIcon sx={{ fontSize: 30 }} />, label: "Flights" },
    { icon: <HotelIcon sx={{ fontSize: 30 }} />, label: "Hotels" },
    { icon: <HomeIcon sx={{ fontSize: 30 }} />, label: "Homestays" },
    { icon: <BeachAccessIcon sx={{ fontSize: 30 }} />, label: "Holiday Plan" },
    { icon: <TrainIcon sx={{ fontSize: 30 }} />, label: "Trains" },
    { icon: <DirectionsBusIcon sx={{ fontSize: 30 }} />, label: "Buses" },
    { icon: <ShieldIcon sx={{ fontSize: 30 }} />, label: "Travel Insurance" },
  ];

  return (
    <>
      {/* Hamburger Icon */}
      <div className="fixed top-4 left-4 z-50 xl:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
        >
          {isSidebarOpen ? (
            <CloseIcon sx={{ fontSize: 30 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 30 }} />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-[#F6F6F6] pt-5 w-4/5 xl:w-1/5 transition-transform z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        {/* LOGO */}
        <div className="flex w-5/6 mx-auto items-center gap-2">
          <img src="Subtract.png" alt="Logo" />
          <p className="font-bold text-xl">Trailbliss</p>
        </div>

        {/* MENU OPTIONS */}
        <div className="mt-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex gap-4 border-b-[0.1rem] ${
                index === 0
                  ? "border-[#1E1E1E] bg-[#ECEFFF]"
                  : "border-[#D9D9D9]"
              } items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all`}
            >
              {item.icon}
              <p className="font-semibold text-lg">{item.label}</p>
            </div>
          ))}
          <div className="flex gap-4 border-b-[0.1rem] items-end px-6 py-3 hover:cursor-pointer hover:bg-[#ECEFFF] hover:border-[#1E1E1E] transition-all">
            <MoreVertIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold text-lg">More</p>
            <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
          </div>
        </div>
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 xl:hidden"
        />
      )}
    </>
  );
}

export default Sidebar;
