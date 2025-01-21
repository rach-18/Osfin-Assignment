import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const AirlineDetails = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:gap-4 gap-1 sm:items-end items-start">
        <h2 className="text-lg font-semibold mt-5">
          Indigo Airline .{" "}
          <span className="text-[#626262] font-normal text-sm">IX3486</span>
        </h2>
        <p className="text-sm text-[#626262] bg-[#F3F3F3] px-3 py-1 rounded-full">
          Airbus A350-900
        </p>
      </div>
      <div className="w-full bg-[#F6F6F6] rounded-lg p-5 mt-2 h-1/5 shadow-md sm:text-base text-sm">
        <div className="flex items-center sm:gap-5 gap-1 h-full">
          <div className="h-full flex flex-col items-center justify-between">
            <p className="font-semibold">12:15</p>
            <p className="font-semibold">06:00</p>
          </div>
          <div className="h-full flex flex-col items-center justify-between">
            <RadioButtonUncheckedIcon sx={{ color: "#A4A4A4" }} />
            <hr className="border-dashed border-[0.1rem] border-[#A4A4A4] w-0 h-full" />
            <RadioButtonUncheckedIcon sx={{ color: "#A4A4A4" }} />
          </div>
          <div className="h-full flex flex-col justify-between">
            <p className="text-[#626262]">
              <span className="font-semibold text-black">New Delhi . </span>
              Indira Gandhi Airport, Terminal, Terminal T3
            </p>
            <p className="text-[#626262]">2h 20m</p>
            <p className="text-[#626262]">
              <span className="font-semibold text-black">Mumbai . </span>
              Chhatrapati Shivaji International Airport, Terminal T2{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirlineDetails;
