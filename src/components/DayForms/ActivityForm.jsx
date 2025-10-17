import { useContext } from "react";
import TripContext from "../../context/TripContext";
import { FaTrash } from "react-icons/fa";

export default function ActivityForm({ idx, activity, dayIndex }) {
  const { handleActivitesInADay, handleDeleteActivity } =
    useContext(TripContext);

  return (
    <div className="mt-4 bg-purple-50 border border-gray-300 rounded-md p-3 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h5 className="text-sm">Activity {idx + 1}</h5>
        <button
          onClick={() => handleDeleteActivity(idx, dayIndex)}
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>

      <input
        type="text"
        name="title"
        value={activity.title}
        required
        onChange={(e) =>
          handleActivitesInADay(e.target.name, e.target.value, dayIndex, idx)
        }
        placeholder="Activity title"
        className="w-full text-sm mb-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-400"
      />

      <select
        name="slot"
        value={activity.slot}
        onChange={(e) =>
          handleActivitesInADay(e.target.name, e.target.value, dayIndex, idx)
        }
        required
        className="w-full text-sm mb-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-400"
      >
        <option value="">Select slot</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select>

      <textarea
        name="activity"
        value={activity.activity}
        onChange={(e) =>
          handleActivitesInADay(e.target.name, e.target.value, dayIndex, idx)
        }
        required
        placeholder="Describe activity"
        rows="2"
        className="w-full text-sm px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-400 resize-none"
      ></textarea>
    </div>
  );
}
