import { PDFViewer } from "@react-pdf/renderer";
import MyPDFDocument from "./MyPDFDocument";

function PDFPreview({ tripOverview }) {
  return (
    <PDFViewer style={{ width: "100%", height: "80vh" }}>
      <MyPDFDocument tripOverview={tripOverview} />
    </PDFViewer>
  );
}
