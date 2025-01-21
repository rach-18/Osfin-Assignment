import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RunningWithErrorsOutlinedIcon from "@mui/icons-material/RunningWithErrorsOutlined";
import { ReactNode } from "react";

interface CardData {
  icon: ReactNode;
  heading: ReactNode;
  subtext: string;
}

const SecureTrip = () => {
  // Contents of the cards
  const cardData: CardData[] = [
    {
      icon: <LuggageOutlinedIcon sx={{ fontSize: 30 }} />,
      heading: (
        <>
          <span className="text-[#008C76] text-2xl">24x7 </span>support
        </>
      ),
      subtext: "Baggage Assistance",
    },
    {
      icon: <LocalShippingOutlinedIcon sx={{ fontSize: 30 }} />,
      heading: (
        <>
          Flat <span className="text-[#008C76] text-2xl">$ 50,000</span>
        </>
      ),
      subtext: "Personal Accident",
    },
    {
      icon: <LuggageOutlinedIcon sx={{ fontSize: 30 }} />,
      heading: (
        <>
          Flat <span className="text-[#008C76] text-2xl">$ 2,500</span>
        </>
      ),
      subtext: "Loss of checked in Baggage",
    },
    {
      icon: <RunningWithErrorsOutlinedIcon sx={{ fontSize: 30 }} />,
      heading: (
        <>
          Flat <span className="text-[#008C76] text-2xl">$ 2,500</span>
        </>
      ),
      subtext: "Delay of checked in Baggage",
    },
  ];

  return (
    <>
      <h2 className="text-lg font-semibold mt-5">Make Your Trip Secure</h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
        className="bg-[#FDF1DC] p-5 rounded-lg w-full mt-2 shadow-md"
      >
        <p>
          <span className="text-2xl font-semibold">360 $</span>/ Traveller
          (18%GST included)
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 w-full mt-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg flex gap-2 lg:w-[24%] sm:w-[48%] w-full"
            >
              {card.icon}
              <div>
                <p className="text-[#626262]">{card.heading}</p>
                <p className="text-sm">{card.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecureTrip;
