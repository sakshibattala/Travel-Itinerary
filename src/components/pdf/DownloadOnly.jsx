import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPDFDocument from "./MyPDFDocument";

export default function DownloadOnly({ tripOverview }) {
  // Only render the button when data exists
  if (!tripOverview || !tripOverview.overView) return null;

  return (
    <div className="text-center mt-4">
      <PDFDownloadLink
        document={<MyPDFDocument tripOverview={tripOverview} />}
        fileName="itinerary.pdf"
      >
        {({ loading }) =>
          loading ? "Preparing PDF..." : "Download Your Itinerary 📄"
        }
      </PDFDownloadLink>
    </div>
  );
}
