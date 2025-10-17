import { useContext } from "react";
import TripContext from "../../context/TripContext";
import HotelForm from "./HotelForm";

export default function HotelPlanner() {
  const { tripOverview, handleAddHotel } = useContext(TripContext);

  return (
    <div className="shadow-md font-serif w-4/5 bg-purple-50 p-3 md:p-8 rounded-lg max-w-3xl mx-auto mt-4 border border-gray-200">
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-gray-800">Hotel Details</h3>

        {/* Add hotel button */}
        <button
          onClick={() => handleAddHotel()}
          type="button"
          className="text-sm btn-small bg-purple-600 text-white px-4 rounded-lg hover:bg-purple-700 transition cursor-pointer py-2"
        >
          + Add Hotel
        </button>
      </div>

      {tripOverview.hotels && tripOverview.hotels.length > 0 ? (
        tripOverview.hotels.map((hotel, index) => (
          <HotelForm key={index} hotel={hotel} hotelIndex={index} />
        ))
      ) : (
        <p className="text-gray-500 mt-3 italic">No hotels added yet.</p>
      )}
    </div>
  );
}
