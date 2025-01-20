import BookingInformation from "../BookingInformation.tsx";
import Navigation from "../Navigation.tsx";
import Baggage from "./Baggage.tsx";
import SecureTrip from "./SecureTrip.tsx";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useAppContext } from "../Context/AppContext.tsx";

const AdditionalInformation: React.FC = () => {
  const { secureTrip, setSecureTrip } = useAppContext();

  return (
    <>
      <BookingInformation curStep={2} />
      <p className="mt-5 text-sm text-[#626262]">2/3 STEP</p>
      <p className="font-bold sm:text-xl text-lg">Additional Information</p>
      <Baggage type="additional" />
      <SecureTrip />

      {/* SHOWING A WARNING SIGN IF THE USER HAVE NOT SELECTED AN OPTION */}
      {secureTrip === "no value" && (
        <div
          data-aos="zoom-in"
          className="bg-[#FF4A4A] py-3 px-4 rounded-lg text-white flex items-center gap-4 mt-5 inline-flex"
        >
          <ErrorOutlineIcon sx={{ color: "white" }} />
          <p>Please select an option</p>
        </div>
      )}

      {/* OPTION TO SECURE OR NOT SECURE THE TRIP */}
      <div className="flex items-center gap-2 mt-4">
        <input
          value="secure"
          onChange={() => setSecureTrip("secure")}
          type="radio"
          name="secure"
          checked={secureTrip === "secure"}
        />
        <label htmlFor="secure">
          <span className="font-semibold">Yes, </span>secure my trip.
        </label>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input
          value="not-secure"
          onChange={() => setSecureTrip("not-secure")}
          type="radio"
          name="not-secure"
          checked={secureTrip === "not-secure"}
        />
        <label htmlFor="not-secure">
          <span className="font-semibold">No, </span>I will book without trip
          secure.
        </label>
      </div>
      <Navigation step={2} />
    </>
  );
};

export default AdditionalInformation;
