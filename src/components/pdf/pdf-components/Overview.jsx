// Overview.jsx
import React from "react";
import { View, Text } from "@react-pdf/renderer";

const Overview = ({
  departureFrom,
  departureDate,
  arrivalDate,
  destination,
  travelers,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        <Text style={styles.label}>From:</Text> {departureFrom || "N/A"}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.label}>Departure:</Text> {departureDate || "N/A"}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.label}>Arrival:</Text> {arrivalDate || "N/A"}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.label}>Destination:</Text> {destination || "N/A"}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.label}>Travelers:</Text> {travelers || 1}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: "#F9EEFF",
    fontFamily: "Times-Roman",
  },
  item: {
    fontSize: 10,
    color: "#321E5D", // deep purple text
  },
  label: {
    fontWeight: "bold",
  },
};

export default Overview;
