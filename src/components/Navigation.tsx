import { useState } from "react";
import { useAppContext } from "./Context/AppContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface NavigationProps {
  step: number;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  textAlign: "center",
};

const Navigation: React.FC<NavigationProps> = ({ step }) => {
  const [open, setOpen] = useState<boolean>(false); //This is to either close or open the modal
  const {
    passengerDetails,
    setSubmissionError,
    secureTrip,
    setSecureTrip,
    setLoading,
    resetData,
    navigate,
  } = useAppContext();

  const handleOpen = () => setOpen(true); //Opens the modal

  const handleClose = () => setOpen(false); //Closes the modal

  // This function validates the contact details of the passenger
  const validateContact = (): boolean => {
    const { validContact, validEmail } = passengerDetails.contactDetails;
    return validContact && validEmail;
  };

  // This function validates the personal details of the passengers
  const validatePassengers = (): boolean => {
    const passengers = passengerDetails.passengers;
    return passengers.every(
      (passenger) =>
        passenger.validName && passenger.validDob && passenger.gender
    );
  };

  // This function handles navigating to the next step
  const handleNext = () => {
    if (step === 1) {
      //If the user is in step 1 then it will check the personal and contact details of the user
      console.log(validateContact());
      console.log(validatePassengers());
      if (validateContact() && validatePassengers()) {
        console.log("Proceeding to next Step");
        setSubmissionError(false);
        navigate("/additional-information");
      } else {
        setSubmissionError(true);
        console.log("Please enter valid details");
      }
    } else if (step === 2) {
      //If the user is in step 2 then it will make sure the user has seleted whether they want to secure their trip or not
      if (!secureTrip || secureTrip === "no value") {
        setSecureTrip("no value");
      } else {
        setSecureTrip("");
        navigate("/review-submit");
      }
    } else if (step === 3) {
      //If the user is in step 3 and the details is finally submitted then this will show the loading page for 5 seconds then navigate to the final page
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/submission");
      }, 5000);
    }
  };

  // This function navigates the user 1 step backward
  const handleBack = () => {
    if (step === 2) {
      navigate("/");
    } else {
      navigate("/additional-information");
    }
  };

  // This function cancels the booking and resets the data
  const handleCancel = () => {
    setOpen(false);
    resetData();
  };

  return (
    <>
      <div className="mt-5 flex sm:flex-row flex-col sm:gap-0 gap-2 items-center justify-between">
        {/* This cancel button is for bigger screens */}
        <button onClick={handleOpen} className="underline sm:block hidden">
          Cancel
        </button>
        {/* This is the confirmation modal for canceling the booking */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className="xl:w-[35%] lg:w-1/2 md:w-[70%] sm:w-5/6 w-11/12"
            sx={style}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to cancel the booking?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              All your data will be lost!
            </Typography>
            <div className="flex sm:flex-row flex-col justify-center gap-2 mt-4">
              <button
                onClick={handleClose}
                className="bg-[#2D2D2D] text-white px-5 py-3 rounded-lg"
              >
                No, I don't want to cancel
              </button>
              <button
                onClick={handleCancel}
                className="bg-[#F6F6F6] text-black px-5 py-3 rounded-lg"
              >
                Yes, I want to cancel
              </button>
            </div>
          </Box>
        </Modal>
        <div className="flex items-center gap-4">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="bg-[#F6F6F6] border-[0.1rem] border-[#F6F6F6] hover:border-black transition-all text-black px-5 py-3 rounded-lg"
            >
              <ArrowBackIosIcon /> Go Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="bg-[#2D2D2D] text-white px-5 py-3 rounded-lg border-[0.1rem] border-black hover:bg-[#F6F6F6] hover:text-black"
          >
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
        <button onClick={handleOpen} className="underline sm:hidden block">
          Cancel
        </button>
      </div>
    </>
  );
};

export default Navigation;
