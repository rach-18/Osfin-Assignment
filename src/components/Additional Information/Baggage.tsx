import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import InfoIcon from "@mui/icons-material/Info";

interface BaggageProps {
  type: "additional" | "review";
}

const Baggage = ({ type }: BaggageProps) => {
  return (
    <>
      <h2 className="text-lg font-semibold mt-5">Baggage Options</h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className={`${
          type === "additional" ? "bg-[#F6F6F6]" : "bg-[#ECEFFF]"
        } w-full rounded-lg p-5 mt-2 shadow-md`}
      >
        <div className="flex gap-4 items-center">
          <CheckCircleRoundedIcon sx={{ fontSize: 30, color: "#008C76" }} />
          <h3 className="sm:text-lg">
            <span className="font-semibold">Included - </span>Baggage per person
          </h3>
        </div>
        <div className="mt-5 flex sm:flex-row flex-col items-center gap-10">
          <div className="flex items-center gap-4">
            <BusinessCenterOutlinedIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold">Cabin Baggage</p>
            <p className="text-[#626262]">7 kgs (1 piece only) / Adult</p>
          </div>
          <div className="flex items-center gap-4">
            <LuggageOutlinedIcon sx={{ fontSize: 30 }} />
            <p className="font-semibold">Check-In Baggage</p>
            <p className="text-[#626262]">15 kgs (1 piece only) / Adult</p>
          </div>
        </div>
        {type === "additional" && (
          <div className="w-full p-5 rounded-lg bg-[#ECEFFF] flex sm:flex-row flex-col gap-4 sm:items-start items-center mt-4">
            <InfoIcon sx={{ fontSize: 30 }} />
            <div>
              <h3 className="font-semibold">One-way Trip Combination</h3>
              <p>
                This trip combines 2 independent one-way with separate terms for
                changes. For more information, see our Terms and Conditions
                here.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Baggage;
