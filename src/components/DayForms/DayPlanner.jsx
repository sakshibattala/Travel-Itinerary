import { useContext } from "react";
import TripContext from "../../context/TripContext";
import DayForm from "./DayForm";

export default function DayPlanner() {
  const { tripOverview, handleAddDay } = useContext(TripContext);

  return (
    <div className="shadow-md font-serif w-4/5 bg-purple-50 p-6 md:p-8 rounded-lg max-w-3xl mx-auto mt-4 border border-gray-200">
      <div className="flex justify-between">
        <h3 className="text-xl">Day-wise Itinerary</h3>
        <button
          onClick={handleAddDay}
          type="button"
          className="text-sm btn-small bg-purple-600 text-white px-4 rounded-lg hover:bg-purple-700 transition cursor-pointer py-2"
        >
          + Add Day
        </button>
      </div>

      {tripOverview?.days?.length > 0 &&
        tripOverview.days.map((day, idx) => (
          <DayForm key={idx} dayIndex={idx} day={day} />
        ))}
    </div>
  );
}
