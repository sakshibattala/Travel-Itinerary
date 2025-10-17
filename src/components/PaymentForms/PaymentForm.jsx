import { useContext } from "react";
import TripContext from "../../context/TripContext";
import { FaTrash } from "react-icons/fa";

export default function PaymentForm({ payment, paymentIdx }) {
  const { handlePaymentChange, handleDeletePayment } = useContext(TripContext);

  return (
    <div className="mt-4 border border-gray-300 rounded-lg focus:outline-none p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="">Installment {paymentIdx + 1}</h2>
        <button
          onClick={() => handleDeletePayment(paymentIdx)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all cursor-pointer"
        >
          <FaTrash />
        </button>
      </div>

      <div className="flex space-x-2 mb-2">
        <input
          type="number"
          required
          placeholder="Amount"
          name="amount"
          min="0"
          value={payment.amount}
          onChange={(e) =>
            handlePaymentChange(e.target.name, e.target.value, paymentIdx)
          }
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          placeholder="Due Date"
          required
          value={payment.dueDate}
          name="dueDate"
          onChange={(e) =>
            handlePaymentChange(e.target.name, e.target.value, paymentIdx)
          }
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
}
