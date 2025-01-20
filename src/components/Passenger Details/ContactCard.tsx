import { ChangeEvent } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useAppContext } from "../Context/AppContext";

function ContactCard() {
  const { passengerDetails, setPassengerDetails, submissionError } =
    useAppContext();

  // Function to update the contact number and its validity
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    const numberRegex = /^[6-9]\d{9}$/; //Ensuring the number starts with 6, 7, 8 or 9 and that it only has 10 digits

    setPassengerDetails((prev) => {
      const updatedContact = {
        ...prev.contactDetails,
        contact: newNumber,
        validContact: numberRegex.test(newNumber),
      };

      return { ...prev, contactDetails: updatedContact };
    });
  };

  // Function to update the email and its validity
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Ensuring that the entered email is valid

    setPassengerDetails((prev) => {
      const updatedContact = {
        ...prev.contactDetails,
        email: newEmail,
        validEmail: emailRegex.test(newEmail),
      };

      return { ...prev, contactDetails: updatedContact };
    });
  };

  const contacts = passengerDetails.contactDetails;

  return (
    <>
      <form className="mt-3 flex lg:flex-row flex-col lg:items-center lg:gap-8 gap-1 w-full">
        {/* NUMBER */}
        <div className="flex flex-col lg:w-1/3 w-full">
          <label htmlFor="name">Phone Number</label>
          <div className="flex items-center gap-3">
            <select
              className="bg-[#F6F6F6] py-3 px-4 rounded-lg"
              name="phone"
              id=""
            >
              <option value="india">🇮🇳</option>
            </select>
            <div className="flex items-center rounded-lg bg-[#F6F6F6] w-full">
              <input
                className="bg-[#F6F6F6] py-3 px-4 rounded-lg w-full outline-none"
                type="number"
                name="number"
                onChange={handleNumber}
                value={contacts.contact}
                placeholder="Enter Phone Number..."
              />
              {/* Displaying a valid or invalid icon according to the input */}
              {(contacts.contact || submissionError) &&
                (contacts.validContact ? (
                  <CheckCircleIcon
                    sx={{
                      backgroundColor: "#F6F6F6",
                      padding: 1,
                      height: "100%",
                      fontSize: 50,
                      borderRadius: "0 0.5rem 0.5rem 0",
                      visibility: contacts.validContact ? "visible" : "hidden",
                      color: "#008C76",
                    }}
                  />
                ) : (
                  <InfoIcon
                    sx={{
                      backgroundColor: "#F6F6F6",
                      padding: 1,
                      height: "100%",
                      fontSize: 50,
                      borderRadius: "0 0.5rem 0.5rem 0",
                      visibility: !contacts.validContact ? "visible" : "hidden",
                      color: "#FF4A4A",
                    }}
                  />
                ))}
            </div>
          </div>
          <p
            className={`text-xs mt-1 ${
              (contacts.contact || submissionError) && !contacts.validContact
                ? "visible"
                : "invisible"
            } text-[#A8A8A8] `}
          >
            Please enter a number with 10 digits, starting from 6, 7, 8, or 9
          </p>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col lg:w-1/3 w-full">
          <label htmlFor="dob">Email Address</label>
          <div className="flex items-center rounded-lg bg-[#F6F6F6] w-full">
            <input
              className="bg-[#F6F6F6] py-3 px-4 rounded-lg w-full outline-none"
              type="email"
              name="email"
              onChange={handleEmail}
              value={contacts.email}
              placeholder="Enter Your Email..."
            />
            {/* Displaying a valid or invalid icon according to the input */}
            {(contacts.email || submissionError) &&
              (contacts.validEmail ? (
                <CheckCircleIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: contacts.validEmail ? "visible" : "hidden",
                    color: "#008C76",
                  }}
                />
              ) : (
                <InfoIcon
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: 1,
                    height: "100%",
                    fontSize: 50,
                    borderRadius: "0 0.5rem 0.5rem 0",
                    visibility: !contacts.validEmail ? "visible" : "hidden",
                    color: "#FF4A4A",
                  }}
                />
              ))}
          </div>
          <p
            className={`text-xs mt-1 ${
              (contacts.email || submissionError) && !contacts.validEmail
                ? "visible"
                : "invisible"
            } text-[#A8A8A8] `}
          >
            Please enter a valid email
          </p>
        </div>
      </form>
    </>
  );
}

export default ContactCard;
