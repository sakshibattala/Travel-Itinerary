import TripOverviewForm from "./TripOverviewForm/TripOverviewForm";
import DayPlanner from "./DayForms/DayPlanner";
import HotelPlanner from "./HotelForms/HotelPlanner";
import Footer from "./Footer";
import TripContext from "../context/TripContext";
import { useContext, useState } from "react";
import { FaPlane } from "react-icons/fa";
import DownloadOnly from "./pdf/DownloadOnly";

export default function TripPlanner() {
  const { tripOverview, handleCleanup } = useContext(TripContext);
  const [showPDF, setShowPDF] = useState(false); // new state

  const handleGetItinerary = (event) => {
    event.preventDefault();
    // handleCleanup();
    setShowPDF(true);
  };
  return (
    <>
      <form onSubmit={handleGetItinerary}>
        <TripOverviewForm />
        <DayPlanner />
        <HotelPlanner />

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition text-lg font-medium cursor-pointer"
          >
            <FaPlane />
            <span>Get Itinerary</span>
          </button>
        </div>

        {showPDF && tripOverview && (
          <DownloadOnly tripOverview={tripOverview} />
        )}

        <Footer />
      </form>
    </>
  );
}
