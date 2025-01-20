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
  const [open, setOpen] = useState<boolean>(false);
  const {
    passengerDetails,
    setSubmissionError,
    secureTrip,
    setSecureTrip,
    setLoading,
    resetData,
    navigate,
  } = useAppContext();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const validateContact = (): boolean => {
    const { validContact, validEmail } = passengerDetails.contactDetails;
    return validContact && validEmail;
  };

  const validatePassengers = (): boolean => {
    const passengers = passengerDetails.passengers;
    return passengers.every(
      (passenger) =>
        passenger.validName && passenger.validDob && passenger.gender
    );
  };

  const handleNext = () => {
    if (step === 1) {
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
      if (!secureTrip || secureTrip === "no value") {
        setSecureTrip("no value");
      } else {
        setSecureTrip("");
        navigate("/review-submit");
      }
    } else if (step === 3) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/submission");
      }, 5000);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      navigate("/");
    } else {
      navigate("/additional-information");
    }
  };

  const handleCancel = () => {
    setOpen(false);
    resetData();
  };

  return (
    <>
      <div className="mt-5 flex sm:flex-row flex-col sm:gap-0 gap-2 items-center justify-between">
        <button onClick={handleOpen} className="underline sm:block hidden">
          Cancel
        </button>
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
