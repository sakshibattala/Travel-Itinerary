import { FaTrash, FaPlus } from "react-icons/fa";
import TripContext from "../../context/TripContext";
import { useContext } from "react";

export default function HotelForm({ hotel, hotelIndex }) {
  const { handleUpdateHotels, tripOverview, handleDeleteHotel } =
    useContext(TripContext);

  return (
    <div className="shadow-md font-serif w-4/5 bg-purple-50 p-6 md:p-8 rounded-lg max-w-3xl mx-auto mt-4 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h5 className="text-sm">Hotel {hotelIndex + 1}</h5>
        <button
          onClick={() => handleDeleteHotel(hotelIndex)}
          className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>

      <input
        name="name"
        required
        value={hotel.name}
        onChange={(event) =>
          handleUpdateHotels(event.target.name, event.target.value, hotelIndex)
        }
        placeholder="Hotel name"
        className="w-full mb-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        name="city"
        value={hotel.city}
        required
        onChange={(event) =>
          handleUpdateHotels(event.target.name, event.target.value, hotelIndex)
        }
        placeholder="City"
        className="w-full mb-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="grid grid-cols-2 gap-2 mb-2">
        <input
          type="date"
          name="checkIn"
          required
          value={hotel.checkIn}
          onChange={(event) =>
            handleUpdateHotels(
              event.target.name,
              event.target.value,
              hotelIndex
            )
          }
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          name="checkOut"
          required
          value={hotel.checkOut}
          onChange={(event) =>
            handleUpdateHotels(
              event.target.name,
              event.target.value,
              hotelIndex
            )
          }
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <input
        type="number"
        name="nights"
        required
        value={hotel.nights}
        onChange={(event) =>
          handleUpdateHotels(event.target.name, event.target.value, hotelIndex)
        }
        placeholder="Number of nights"
        min="0"
        className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
