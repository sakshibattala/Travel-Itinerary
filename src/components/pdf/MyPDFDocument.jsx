import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import pdfStyles from "./pdfStyles";
import Header from "./pdf-components/Header";
import Overview from "./pdf-components/Overview";
import DayPlan from "./pdf-components/DayPlan";
import Hotels from "./pdf-components/Hotels";
import Payments from "./pdf-components/Payments";
import Footer from "./pdf-components/Footer";

const MyPDFDocument = ({ tripOverview }) => {
  // Safe defaults
  const overView = tripOverview?.overView || {};
  const days = Array.isArray(tripOverview?.days) ? tripOverview.days : [];
  const hotels = Array.isArray(tripOverview?.hotels) ? tripOverview.hotels : [];
  const payments = Array.isArray(tripOverview?.payments)
    ? tripOverview.payments
    : [];

  const daysCount = days.length;
  const nightsCount = daysCount > 0 ? daysCount - 1 : 0;

  return (
    <Document>
      <Page style={pdfStyles.page}>
        {/* HEADER */}
        <Header
          logoUrl="https://res.cloudinary.com/dgquw6oma/image/upload/v1760602830/Frame_206_yc0sx5.png"
          name={overView.name || "N/A"}
          destination={overView.destination || "N/A"}
          days={daysCount}
          nights={nightsCount}
        />

        {/* OVERVIEW */}
        <Overview
          departureFrom={overView.departureFrom || "N/A"}
          departureDate={overView.departureDate || "N/A"}
          arrivalDate={overView.arrivalDate || "N/A"}
          destination={overView.destination || "N/A"}
          travelers={overView.travelers || "N/A"}
        />

        {/* DAY PLAN */}
        {days.length > 0 && (
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 6,
                fontFamily: "Times-Roman",
                color: "#321E5D",
              }}
            >
              Day-wise Itinerary
            </Text>
            {days.map((day, idx) => (
              <DayPlan key={idx} day={day} index={idx} />
            ))}
          </View>
        )}

        {/* HOTELS & PAYMENTS */}
        <Hotels hotels={hotels} />
        <Payments payments={payments} />

        {/* FOOTER */}
        <Footer />
      </Page>
    </Document>
  );
};

// ✅ Default export (important for Vite import)
export default MyPDFDocument;
