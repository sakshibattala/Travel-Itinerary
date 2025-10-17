import { createContext, useState } from "react";

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [tripOverview, setTripOverview] = useState({
    overView: {
      name: "",
      departureFrom: "",
      destination: "",
      departureDate: "",
      arrivalDate: "",
      travelers: 1,
    },
    days: [],
    hotels: [],
    payments: [],
  });

  const updateTripOverview = (name, value) => {
    setTripOverview((prevData) => ({
      ...prevData,
      overView: { ...prevData.overView, [name]: value },
    }));
  };

  const handleAddDay = () => {
    setTripOverview((prevData) => ({
      ...prevData,
      days: [...prevData.days, { title: "", date: "", activities: [] }],
    }));
  };

  const handleRemoveDay = (idx) => {
    setTripOverview((prevData) => {
      return { ...prevData, days: prevData.days.filter((_, i) => i !== idx) };
    });
  };

  const handleUpdateDayDetails = (name, value, index) => {
    setTripOverview((prevData) => {
      const updatedDays = [...prevData.days];
      updatedDays[index] = { ...updatedDays[index], [name]: value };
      return { ...prevData, days: updatedDays };
    });
  };

  const handleAddActivityInsideDay = (dayIndex) => {
    setTripOverview((prevData) => {
      const updatedDays = [...prevData.days];
      const day = updatedDays[dayIndex];

      updatedDays[dayIndex] = {
        ...day,
        activities: [
          ...(day.activities || []),
          { title: "", slot: "", activity: "" },
        ],
      };

      return { ...prevData, days: updatedDays };
    });
  };

  const handleActivitesInADay = (name, value, dayIndex, activityIndex) => {
    setTripOverview((prevData) => {
      const updatedDays = [...prevData.days];

      // Use a fallback empty array if activities is undefined
      const updatedActivities = [...(updatedDays[dayIndex].activities || [])];

      updatedActivities[activityIndex] = {
        ...updatedActivities[activityIndex],
        [name]: value,
      };

      updatedDays[dayIndex] = {
        ...updatedDays[dayIndex],
        activities: updatedActivities,
      };

      return { ...prevData, days: updatedDays };
    });
  };

  const handleDeleteActivity = (activityIdx, dayIndex) => {
    setTripOverview((prevData) => {
      const updatedDays = [...prevData.days];
      const day = updatedDays[dayIndex];
      updatedDays[dayIndex] = {
        ...day,
        activities: day.activities.filter((_, i) => i !== activityIdx),
      };

      return { ...prevData, days: [...updatedDays] };
    });
  };

  const handleAddHotel = () => {
    setTripOverview((prevData) => {
      const newHotel = {
        name: "",
        city: "",
        checkIn: "",
        checkOut: "",
        nights: "",
      };

      return {
        ...prevData,
        hotels: [...(prevData.hotels || []), newHotel],
      };
    });
  };

  const handleDeleteHotel = (hotelIndex) => {
    setTripOverview((prevData) => {
      const updatedHotels = prevData.hotels.filter((_, i) => i !== hotelIndex);

      return { ...prevData, hotels: [...updatedHotels] };
    });
  };

  const handleUpdateHotels = (name, value, hotelIndex) => {
    setTripOverview((prevData) => {
      const updatedHotels = [...prevData.hotels];
      updatedHotels[hotelIndex] = {
        ...updatedHotels[hotelIndex],
        [name]: value,
      };

      return { ...prevData, hotels: [...updatedHotels] };
    });
  };

  const handleAddPayment = () => {
    setTripOverview((prevData) => {
      return {
        ...prevData,
        payments: [...prevData.payments, { amount: "", dueDate: "" }],
      };
    });
  };

  const handlePaymentChange = (name, value, paymentIdx) => {
    setTripOverview((prevData) => {
      const updatedPayments = [...prevData.payments];
      updatedPayments[paymentIdx] = {
        ...updatedPayments[paymentIdx],
        [name]: value,
      };

      return { ...prevData, payments: [...updatedPayments] };
    });
  };

  const handleDeletePayment = (paymentIdx) => {
    setTripOverview((prevData) => {
      const updatedPayments = prevData.payments.filter(
        (_, i) => i !== paymentIdx
      );

      return { ...prevData, payments: [...updatedPayments] };
    });
  };

  const handleCleanup = () => {
    setTripOverview({
      overView: {
        name: "",
        departureFrom: "",
        destination: "",
        departureDate: "",
        arrivalDate: "",
        travelers: 1,
      },
      days: [],
      hotels: [],
      payments: [],
    });
  };

  return (
    <TripContext.Provider
      value={{
        updateTripOverview,
        tripOverview,
        handleAddDay,
        handleRemoveDay,
        handleUpdateDayDetails,
        handleAddActivityInsideDay,
        handleActivitesInADay,
        handleDeleteActivity,
        handleUpdateHotels,
        handleDeleteHotel,
        handleAddHotel,
        handleAddPayment,
        handleDeletePayment,
        handlePaymentChange,
        handleCleanup,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export default TripContext;
