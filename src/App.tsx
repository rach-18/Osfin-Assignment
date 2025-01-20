import { BrowserRouter, Route, Routes } from "react-router-dom";
import PassengerDetails from "./components/Passenger Details/PassengerDetails.tsx";
import Sidebar from "./components/Sidebar.tsx";
import AdditionalInformation from "./components/Additional Information/AdditionalInformation.tsx";
import ReviewAndSubmit from "./components/Review and Submit/ReviewAndSubmit.tsx";
import { AppProvider } from "./components/Context/AppContext.tsx";
import Submission from "./components/Submission/Submission.tsx";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  // AOS Animation initialization
  useEffect(() => {
    AOS.init({
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <div className="w-full xl:ml-[20%] xl:mt-0 mt-14 py-5 px-8">
          <BrowserRouter>
            <AppProvider>
              <Routes>
                <Route path="/" element={<PassengerDetails />} />
                <Route
                  path="/additional-information"
                  element={<AdditionalInformation />}
                />
                <Route path="/review-submit" element={<ReviewAndSubmit />} />
                <Route path="/submission" element={<Submission />} />
              </Routes>
            </AppProvider>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
