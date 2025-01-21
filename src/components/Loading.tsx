import { useEffect, useState } from "react";
import { useAppContext } from "./Context/AppContext";

const Loading = () => {
  const { loading } = useAppContext();
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Disable scrolling while loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      // Trigger exit animation when loading is false
      setIsExiting(true);
      // Re-enable scrolling when loading completes after exit animation
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 500); // Timing matches the slide-out duration
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <>
      {loading && (
        <div
          className={`fixed w-screen h-screen top-0 left-0 bg-gradient-to-r from-[#6575C6] via-[#D0D8FF] to-[#FAFAFA] z-50 overflow-hidden flex flex-col items-center justify-center transform ${
            isExiting ? "slide-in" : ""
          }`}
        >
          {/* Background Clouds */}
          <img
            src="Cloud.png"
            className="w-full object-cover absolute top-0 animate-cloud-move"
            alt="Cloud Background"
          />
          <img
            src="Cloud.png"
            className="w-full object-cover absolute bottom-0 transform scale-x-[-1] scale-y-[-1] animate-cloud-move"
            alt="Cloud Background"
          />

          {/* Airplane Icon Animation */}
          <div
            className="relative z-40 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1500"
          >
            <img
              src="Plane.png"
              className="animate-fly sm:w-[70%] w-[45%]"
              alt="Airplane"
            />
            <p className="text-white drop-shadow-md sm:w-full w-11/12 text-center sm:text-lg mt-4 animate-bounce">
              Fasten your seatbelt, we’re preparing for takeoff!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
