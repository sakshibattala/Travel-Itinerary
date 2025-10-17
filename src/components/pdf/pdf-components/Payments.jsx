// Payments.jsx
import React from "react";
import { View, Text } from "@react-pdf/renderer";

const Payments = ({ payments }) => {
  if (!payments || payments.length === 0) return null;

  // Calculate total payment
  const totalPayment = payments.reduce(
    (sum, p) => sum + (parseFloat(p.amount) || 0),
    0
  );

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <Text style={styles.sectionHeader}>Payment Plan</Text>

      {/* Total Payment */}
      <Text style={styles.totalPayment}>Total Payment: {totalPayment} Rs</Text>

      {/* Table Header */}
      <View style={styles.tableRowHeader}>
        <Text style={styles.columnHeader}>Installment</Text>
        <Text style={styles.columnHeader}>Amount</Text>
        <Text style={styles.columnHeader}>Due Date</Text>
      </View>

      {/* Table Rows */}
      {payments.map((p, idx) => (
        <View key={idx} style={styles.tableRow}>
          <Text style={styles.column}>Installment {idx + 1}</Text>
          <Text style={styles.column}>{p.amount || 0}</Text>
          <Text style={styles.column}>{p.dueDate || "N/A"}</Text>
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
  totalPayment: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
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
    width: "33%",
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
    width: "33%",
    textAlign: "center",
    color: "#321E5D",
  },
};

export default Payments;
