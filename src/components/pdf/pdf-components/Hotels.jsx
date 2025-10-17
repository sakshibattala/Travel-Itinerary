// Hotels.jsx
import React from "react";
import { View, Text } from "@react-pdf/renderer";

const Hotels = ({ hotels }) => {
  if (!hotels || hotels.length === 0) return null;

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <Text style={styles.sectionHeader}>Hotel Bookings</Text>

      {/* Table Header */}
      <View style={styles.tableRowHeader}>
        <Text style={styles.columnHeader}>Hotel Name</Text>
        <Text style={styles.columnHeader}>City</Text>
        <Text style={styles.columnHeader}>Check In</Text>
        <Text style={styles.columnHeader}>Check Out</Text>
        <Text style={styles.columnHeader}>Nights</Text>
      </View>

      {/* Table Rows */}
      {hotels.map((hotel, idx) => (
        <View key={idx} style={styles.tableRow}>
          <Text style={styles.column}>{hotel.name || "N/A"}</Text>
          <Text style={styles.column}>{hotel.city || "N/A"}</Text>
          <Text style={styles.column}>{hotel.checkIn || "N/A"}</Text>
          <Text style={styles.column}>{hotel.checkOut || "N/A"}</Text>
          <Text style={styles.column}>{hotel.nights || "?"}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = {
  container: {
    marginVertical: 12,
    paddingHorizontal: 5,
    fontFamily: "Times-Roman",
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#321E5D",
  },
  tableRowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#321E5D",
    paddingVertical: 6,
    borderRadius: 4,
  },
  columnHeader: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    width: "20%",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9EEFF",
    paddingVertical: 6,
    marginBottom: 2,
    borderRadius: 4,
  },
  column: {
    fontSize: 10,
    width: "20%",
    textAlign: "center",
    color: "#321E5D",
  },
};

export default Hotels;
