import { useContext } from "react";
import TripContext from "../../context/TripContext";
import ActivityForm from "./ActivityForm";
import { FaTrash } from "react-icons/fa";

export default function DayForm({ dayIndex, day }) {
  const {
    handleRemoveDay,
    handleUpdateDayDetails,
    handleAddActivityInsideDay,
  } = useContext(TripContext);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    handleUpdateDayDetails(name, value, dayIndex);
  };

  return (
    <div className="font-serif w-4/5 bg-purple-50 p-6 md:p-8 rounded-lg max-w-3xl mx-auto mt-4 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl">Day {dayIndex + 1}</h4>
        <button
          onClick={() => handleRemoveDay(dayIndex)}
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all cursor-pointer"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>

      <input
        name="title"
        type="text"
        value={day.title}
        onChange={handleOnchange}
        placeholder="Enter day title"
        required
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        name="date"
        type="date"
        value={day.date}
        required
        onChange={handleOnchange}
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <button
        onClick={() => handleAddActivityInsideDay(dayIndex)}
        type="button"
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        + Add Activity
      </button>

      {day.activities?.length > 0 &&
        day.activities.map((activity, idx) => (
          <ActivityForm
            key={idx}
            idx={idx}
            activity={activity}
            dayIndex={dayIndex}
          />
        ))}
    </div>
  );
}
