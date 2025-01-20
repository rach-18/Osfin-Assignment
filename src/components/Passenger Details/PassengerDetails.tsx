import { useContext } from "react";
import BookingInformation from "../BookingInformation";
import Navigation from "../Navigation";
import ContactCard from "./ContactCard";
import Ticket from "./Ticket";
import { AppContext } from "../Context/AppContext";
import PassengerCard from "./PassengerCard";

interface Passenger {
  name: string;
  dob: Date | null;
  gender: string;
  validName: boolean;
  validDob: boolean;
  validGender: boolean;
}

interface PassengerDetails {
  passengers: Passenger[];
}

function PassengerDeatils() {
  const { passengerDetails, setPassengerDetails } = useContext(AppContext);

  const handleAddPassenger = () => {
    const newPassenger: Passenger = {
      name: "",
      dob: null,
      gender: "",
      validName: false,
      validDob: false,
      validGender: false,
    };

    setPassengerDetails((prev: PassengerDetails) => ({
      ...prev,
      passengers: [...prev.passengers, newPassenger],
    }));
  };

  return (
    <>
      <BookingInformation curStep={1} />
      <div className="mt-10">
        <Ticket />
        <p className="mt-5 text-sm text-[#626262]">1/3 STEP</p>
        <p className="font-bold text-xl">Passenger Details</p>
        {passengerDetails.passengers.map((passenger, index) => {
          return (
            <div key={index} className="mt-5 z-20">
              <p className="text-lg font-semibold">
                Passenger {index + 1} Details
              </p>
              <PassengerCard passengerIndex={index} />
            </div>
          );
        })}
        <button
          onClick={handleAddPassenger}
          className="mt-2 text-[#6B6B6B] font-semibold hover:cursor-pointer"
        >
          + Add a Passenger
        </button>
        <p className="mt-5 text-lg font-semibold">Contact Details</p>
        <ContactCard />
        <Navigation step={1} />
      </div>
    </>
  );
}

export default PassengerDeatils;
