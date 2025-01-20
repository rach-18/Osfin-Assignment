import Baggage from "../Additional Information/Baggage";
import BookingInformation from "../BookingInformation";
import Loading from "../Loading";
import Navigation from "../Navigation";
import AirlineDetails from "./AirlineDetails";
import Passengers from "./Passengers";

interface ReviewAndSubmitProps {}

const ReviewAndSubmit: React.FC<ReviewAndSubmitProps> = () => {
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
