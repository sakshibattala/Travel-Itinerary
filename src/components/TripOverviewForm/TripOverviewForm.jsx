import { useContext, useState } from "react";
import TripContext from "../../context/TripContext";
import PaymentForm from "../PaymentForms/PaymentForm";

export default function TripOverviewForm() {
  const { updateTripOverview, tripOverview, handleAddPayment } =
    useContext(TripContext);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    updateTripOverview(name, value);
  };

  return (
    <div className="font-serif flex flex-col items-center mt-12">
      {/* Top Image separate from the form */}
      <div>
        <img
          src="https://res.cloudinary.com/dgquw6oma/image/upload/v1760602830/Frame_206_yc0sx5.png"
          alt="Trip banner"
          className="w-38 h-19"
        />
      </div>

      <div className="shadow-md w-4/5 bg-purple-50 p-6 md:p-8 rounded-lg max-w-3xl mx-auto mt-4 border border-gray-200">
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl">Travel Overview</h1>
          {/* Row 1: Name + Departure From */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1 flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Madeline perez"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={tripOverview.overView.name}
                onChange={handleOnchange}
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Departure From
              </label>
              <input
                type="text"
                name="departureFrom"
                placeholder="Osaka"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleOnchange}
                value={tripOverview.overView.departureFrom}
                required
              />
            </div>
          </div>

          {/* Row 2: Destination */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              placeholder="Switzerland"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleOnchange}
              value={tripOverview.overView.destination}
              required
            />
          </div>

          {/* Row 3: Departure Date + Arrival Date */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1 flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Departure Date
              </label>
              <input
                type="date"
                name="departureDate"
                className="cursor-pointer p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleOnchange}
                value={tripOverview.overView.departureDate}
                required
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Arrival Date
              </label>
              <input
                type="date"
                name="arrivalDate"
                onChange={handleOnchange}
                value={tripOverview.overView.arrivalDate}
                required
                className="cursor-pointer p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Row 4: Number of Travelers */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">
              Number of Travelers
            </label>
            <input
              type="number"
              name="travelers"
              min="1"
              placeholder="1"
              onChange={handleOnchange}
              value={tripOverview.overView.travelers}
              required
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-end">
            <button
            type="button"
              onClick={() => {
                handleAddPayment();
              }}
              className="text-right text-sm btn-small bg-purple-600 text-white px-4 rounded-lg hover:bg-purple-700 transition cursor-pointer py-2"
            >
              +Add payment
            </button>
          </div>

          {tripOverview.payments.length > 0 &&
            tripOverview.payments.map((p, idx) => (
              <PaymentForm key={idx} payment={p} paymentIdx={idx} />
            ))}
        </div>
      </div>
    </div>
  );
}
