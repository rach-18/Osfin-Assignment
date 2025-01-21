import Baggage from "../Additional Information/Baggage.tsx";
import BookingInformation from "../BookingInformation.tsx";
import Loading from "../Loading.tsx";
import Navigation from "../Navigation.tsx";
import AirlineDetails from "./AirlineDetails.tsx";
import Passengers from "./Passengers.tsx";

const ReviewAndSubmit = () => {
  return (
    <>
      <Loading />
      <BookingInformation curStep={3} />
      <p className="mt-5 text-sm text-[#626262]">3/3 STEP</p>
      <p className="font-bold sm:text-xl text-lg">Review and Submit</p>
      <AirlineDetails />
      <Passengers />
      <Baggage type="review" />
      <Navigation step={3} />
    </>
  );
};

export default ReviewAndSubmit;
