import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";

// Define the types for passenger details
interface Passenger {
  name: string;
  dob: Date | null;
  gender: string;
  validName: boolean;
  validDob: boolean;
  validGender: boolean;
}

interface ContactDetails {
  contact: string;
  email: string;
  validContact: boolean;
  validEmail: boolean;
}

interface PassengerDetails {
  passengers: Passenger[];
  contactDetails: ContactDetails;
}

// Define the context value type
interface AppContextType {
  passengerDetails: PassengerDetails;
  setPassengerDetails: React.Dispatch<React.SetStateAction<PassengerDetails>>;
  submissionError: boolean;
  setSubmissionError: React.Dispatch<React.SetStateAction<boolean>>;
  secureTrip: string;
  setSecureTrip: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  formatDate: (date: Date) => string;
  emailDisplay: (email: string) => string;
  resetData: () => void;
  navigate: ReturnType<typeof useNavigate>;
}

// Create the context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the props for the provider
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [passengerDetails, setPassengerDetails] = useState<PassengerDetails>(
    () => {
      const storedData = localStorage.getItem("passengerDetails");

      if (storedData) {
        const parsedData: PassengerDetails = JSON.parse(storedData);

        // Ensure `dob` is converted back to Date objects
        parsedData.passengers = parsedData.passengers.map((passenger) => ({
          ...passenger,
          dob: passenger.dob ? new Date(passenger.dob) : null,
        }));

        return parsedData;
      }

      // Default state
      return {
        passengers: [
          {
            name: "",
            dob: null,
            gender: "",
            validName: false,
            validDob: false,
            validGender: false,
          },
        ],
        contactDetails: {
          contact: "",
          email: "",
          validContact: false,
          validEmail: false,
        },
      };
    }
  );

  const [submissionError, setSubmissionError] = useState<boolean>(false);
  const [secureTrip, setSecureTrip] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Adding the data to local storage
  useEffect(() => {
    localStorage.setItem("passengerDetails", JSON.stringify(passengerDetails));
  }, [passengerDetails]);

  // This function is to format the date in dd-mm-yyy
  const formatDate = (date: Date | null): string => {
    if (!date) return ""; // Handle null case
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  // This function is to only show 1/3 of the email starting from the first character till the @ and then show default value for the rest
  const emailDisplay = (email: string): string => {
    const sub = email.slice(0, email.indexOf("@"));
    const ind = Math.ceil(sub.length / 3);

    return sub.slice(0, ind) + "****@****.com";
  };

  // This function is to reset the data
  const resetData = (): void => {
    navigate("/");
    const resetDetails: PassengerDetails = {
      passengers: [
        {
          name: "",
          dob: null,
          gender: "",
          validName: false,
          validDob: false,
          validGender: false,
        },
      ],
      contactDetails: {
        contact: "",
        email: "",
        validContact: false,
        validEmail: false,
      },
    };
    setPassengerDetails(resetDetails);
    localStorage.setItem("passengerDetails", JSON.stringify(resetDetails));
  };

  return (
    <AppContext.Provider
      value={{
        passengerDetails,
        setPassengerDetails,
        submissionError,
        setSubmissionError,
        secureTrip,
        setSecureTrip,
        loading,
        setLoading,
        formatDate,
        emailDisplay,
        resetData,
        navigate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to safely access context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
