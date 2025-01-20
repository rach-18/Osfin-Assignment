import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useAppContext } from "../Context/AppContext";
import DeleteIcon from "@mui/icons-material/Delete";

interface PassengerCardProps {
  passengerIndex: number;
}

function PassengerCard({ passengerIndex }: PassengerCardProps) {
  const { passengerDetails, setPassengerDetails, submissionError } =
    useAppContext();

  // Function to update the passenger name and ensure it has more than 3 characters
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    setPassengerDetails((prev) => {
      const updatedPassengers = [...prev.passengers];
      updatedPassengers[passengerIndex] = {
        ...updatedPassengers[passengerIndex],
        name: newName,
        validName: newName.length > 3 ? true : false,
      };
      return { ...prev, passengers: updatedPassengers };
    });
  };

  // Function to update the dob and make sure that the date is neither in the future nor is the user's age more than 90
  const handleDob = (date: Date | null) => {
    console.log(date);
    const currentDate = new Date();
    const maxAgeDate = new Date(
      currentDate.setFullYear(currentDate.getFullYear() - 90)
    );

    setPassengerDetails((prev) => {
      const updatedPassengers = [...prev.passengers];
      updatedPassengers[passengerIndex] = {
        ...updatedPassengers[passengerIndex],
        dob: date,
        validDob:
          !date || date > new Date() || date < maxAgeDate ? false : true,
      };
      return { ...prev, passengers: updatedPassengers };
    });

    console.log(passengerDetails);
  };

  // Function to update the gender
  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGender = e.target.value;

    setPassengerDetails((prev) => {
      const updatedPassengers = [...prev.passengers];
      updatedPassengers[passengerIndex] = {
        ...updatedPassengers[passengerIndex],
        gender: newGender,
        validGender: true,
      };
      return { ...prev, passengers: updatedPassengers };
    });
  };

  // Function to delete the extra passengers
  const handleDeletePassenger = () => {
    setPassengerDetails((prev) => {
      const currPassengers = [...prev.passengers];
      const filteredPassengers = currPassengers.filter((_, index) => {
        return index !== passengerIndex;
      });

      return { ...prev, passengers: filteredPassengers };
    });
  };

  const passenger = passengerDetails.passengers[passengerIndex];

  return (
    <>
      <form className="mt-3 flex lg:flex-row flex-col lg:items-center justify-between lg:gap-8 gap-1 w-full">
        {/* NAME */}
        <div className="flex flex-col lg:w-1/3 w-full">
          <label htmlFor="name">Full Name</label>
          <div className="flex items-center rounded-lg bg-[#F6F6F6]">
            <input
              className="bg-[#F6F6F6] py-3 px-4 w-full outline-none rounded-lg"
              type="text"
              name="name"
              value={passenger.name}
              onChange={handleName}
              placeholder="Enter Full Name..."
            />
            {/* Displaying a valid or invalid icon according to the input */}
            {(passenger.name || submissionError) &&
              (!passenger.validName ? (
                <InfoIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    color: "#FF4A4A",
                  }}
                  data-aos="zoom-in"
                />
              ) : (
                <CheckCircleIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    color: "#008C76",
                  }}
                  data-aos="zoom-in"
                />
              ))}
          </div>
          <p
            className={`text-xs mt-1 text-[#A8A8A8] ${
              (passenger.name || submissionError) && !passenger.validName
                ? "visible"
                : "invisible"
            }`}
          >
            Name should have more than 3 characters
          </p>
        </div>

        {/* DATE OF BIRTH */}
        <div className="flex flex-col lg:w-1/3 w-full">
          <label htmlFor="dob">Date of Birth</label>
          <div className="flex items-center rounded-lg bg-[#F6F6F6] justify-between">
            <DatePicker
              dateFormat="dd-MM-yyyy"
              className="bg-[#F6F6F6] py-3 px-4 w-full outline-none rounded-l-lg"
              placeholderText="dd/mm/yy"
              selected={passenger.dob}
              onChange={handleDob}
              showYearDropdown
              scrollableYearDropdown
              scrollableMonthYearDropdown
            />
            {/* Displaying a valid or invalid icon according to the input */}
            {(passenger.dob || submissionError) &&
              (!passenger.validDob ? (
                <InfoIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    color: "#FF4A4A",
                  }}
                  data-aos="zoom-in"
                />
              ) : (
                <CheckCircleIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    color: "#008C76",
                  }}
                  data-aos="zoom-in"
                />
              ))}
          </div>
          <p
            className={`text-xs mt-1 text-[#A8A8A8] ${
              (passenger.dob || submissionError) && !passenger.validDob
                ? "visible"
                : "invisible"
            }`}
          >
            Age cannot be more than 90 years and should be valid
          </p>
        </div>

        {/* GENDER */}
        <div className="lg:w-1/3 w-full">
          <label htmlFor="gender">Gender</label>
          <div className="flex items-center gap-5 mt-2">
            <div className="flex gap-2">
              <input
                onChange={handleGender}
                type="radio"
                name={`gender-${passengerIndex}`}
                value="Male"
                checked={passenger.gender === "Male"}
              />
              <p>Male</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={handleGender}
                type="radio"
                name={`gender-${passengerIndex}`}
                value="Female"
                checked={passenger.gender === "Female"}
              />
              <p>Female</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={handleGender}
                type="radio"
                name={`gender-${passengerIndex}`}
                value="Others"
                checked={passenger.gender === "Others"}
              />
              <p>Others</p>
            </div>
            {/* Displaying a valid or invalid icon according to the input */}
            {(passenger.gender || submissionError) &&
              (passenger.validGender ? (
                <CheckCircleIcon
                  sx={{
                    fontSize: 30,
                    color: "#008C76",
                  }}
                  data-aos="zoom-in"
                />
              ) : (
                <InfoIcon
                  sx={{
                    fontSize: 30,
                    color: "#FF4A4A",
                  }}
                  data-aos="zoom-in"
                />
              ))}
          </div>
          <p
            className={`text-xs mt-1 ${
              (passenger.gender || submissionError) && !passenger.validGender
                ? "visible"
                : "invisible"
            } text-[#A8A8A8] `}
          >
            Please select your gender
          </p>
        </div>
      </form>

      {/* Only showing the delete button if it is not the first passenger because the first passenger is there by default and cannot be deleted */}
      {passengerIndex > 0 && (
        <button
          onClick={handleDeletePassenger}
          className="flex items-center text-[#FF4A4A] my-2"
        >
          <DeleteIcon /> Delete Passenger
        </button>
      )}
    </>
  );
}

export default PassengerCard;
