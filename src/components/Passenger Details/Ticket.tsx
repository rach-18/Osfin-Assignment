import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";

const Ticket: React.FC = () => {
  return (
    <>
      {/* OUTER DIV FOR THE GRADIENT BORDER */}
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="relative bg-gradient-to-r from-[#B5C1FF] to-[#D9D9D9] p-[1px] rounded-lg shadow-md w-full"
      >
        <div className="relative w-full bg-gradient-to-r from-[#6575C6] via-[#D0D8FF] to-[#FAFAFA] rounded-lg flex items-center py-5">
          {/* LEFT SEMI CIRCLE */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-r-[2px] border-r-[#B5C1FF]"></div>

          {/* CONTENT AREA */}
          <div className="flex-grow p-6">
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="Cloud.png"
              alt="cloud"
            />
            <img
              className="transform scale-x-[-1] scale-y-[-1] absolute w-full bottom-0 left-0 h-full"
              src="Cloud.png"
              alt="cloud"
            />
            <div className="flex lg:flex-row flex-col items-center xl:pr-5 z-10 relative">
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="500"
                src="Plane.png"
                alt="Plane"
              />
              <div className="flex lg:flex-row flex-col items-center gap-5 justify-between w-full">
                <div className="flex lg:flex-row flex-col lg:w-[35%] w-full lg:mt-0 mt-5 gap-5 lg:items-start items-center lg:border-r-[1px] border-[#A4A4A4] border-dashed w-[25%]">
                  <img src="Indigo-logo.png" alt="Indigo Logo" />
                  <div>
                    <p className="sm:text-xl text-lg font-semibold mb-1">
                      Indigo Airline
                    </p>
                    <p className="text-[#626262] text-sm mb-1">
                      Airbus A350-900
                    </p>
                    <p className="text-xs text-[#626262]">
                      <FlightTakeoffIcon /> 2h 20m
                    </p>
                  </div>
                </div>
                <div className="flex items-center sm:gap-0 gap-2 justify-evenly w-full">
                  <div>
                    <p className="text-2xl font-semibold">12:15</p>
                    <hr className="border-[#A4A4A4] my-2" />
                    <p className="text-[#2D2D2D] text-sm">
                      <SouthEastRoundedIcon />
                      DEL (Delhi)
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <AirplanemodeActiveRoundedIcon className="transform rotate-90" />
                    <p className="text-sm text-[#626262]">Non-stop</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">6:00</p>
                    <hr className="border-[#A4A4A4] my-2" />
                    <p className="text-[#2D2D2D] text-sm">
                      <SouthEastRoundedIcon />
                      BOM (Mumbai)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SEMI CIRCLE */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-l-[2px] border-l-[#D9D9D9]"></div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
