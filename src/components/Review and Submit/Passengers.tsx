import { useAppContext } from "../Context/AppContext";

interface Passenger {
  name: string;
  dob: Date | null;
  gender: string;
}

interface ContactDetails {
  contact: string;
  email: string;
}

interface PassengerDetails {
  passengers: Passenger[];
  contactDetails: ContactDetails;
}

interface AppContextType {
  passengerDetails: PassengerDetails;
  formatDate: (date: Date | null) => string; // Make sure the type of `date` is Date | null
  emailDisplay: (email: string) => string;
}

const Passengers: React.FC = () => {
  const { passengerDetails, formatDate, emailDisplay } = useAppContext();

  return (
    <>
      <h2 className="text-lg font-semibold mt-5">Passenger Details</h2>
      <div className="w-full bg-[#F6F6F6] rounded-lg p-5 mt-2 shadow-md">
        {passengerDetails.passengers.map((passenger, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col md:gap-0 gap-2 justify-between items-center"
          >
            <div className="w-full flex items-center md:justify-between mx-8">
              <p className="text-[#626262] w-1/2">Full Name</p>
              <p className="font-semibold">{passenger.name}</p>
            </div>
            <div className="w-full flex items-center md:justify-between mx-8">
              <p className="text-[#626262] w-1/2">Date of Birth</p>
              <p className="font-semibold">
                {passenger.dob ? formatDate(passenger.dob) : "N/A"}{" "}
                {/* Handle null */}
              </p>
            </div>
            <div className="w-full flex items-center md:justify-between mx-8">
              <p className="text-[#626262] w-1/2">Gender</p>
              <p className="font-semibold">{passenger.gender}</p>
            </div>
          </div>
        ))}
        <div className="flex md:flex-row flex-col md:items-center mt-4">
          <div className="md:w-1/3 w-full flex items-center md:justify-between md:mx-8">
            <p className="text-[#626262] w-1/2">Phone No.</p>
            <p className="font-semibold">
              {passengerDetails.contactDetails.contact || "N/A"}{" "}
              {/* Handle empty contact */}
            </p>
          </div>
          <div className="md:w-1/3 w-full flex items-center md:justify-between md:mx-8">
            <p className="text-[#626262] w-1/2">Email Address</p>
            <p className="font-semibold">
              {emailDisplay(passengerDetails.contactDetails.email) || "N/A"}{" "}
              {/* Handle empty email */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Passengers;
