// DayPlan.jsx
import React from "react";
import { View, Text } from "@react-pdf/renderer";

const DayPlan = ({ day, index }) => {
  const activities = day.activities || [];

  const getActivity = (slot) => {
    const act = activities.find(
      (a) => a.slot?.toLowerCase() === slot.toLowerCase()
    );
    return act ? act.activity : "Not added";
  };

  const slots = ["morning", "afternoon", "evening"];

  return (
    <View style={styles.container}>
      {/* Day Header */}
      <Text style={styles.dayHeader}>
        Day {index + 1}: {day.title || "No Title"} | {day.date || "No Date"}
      </Text>

      {/* Timeline Slots */}
      <View style={styles.timeline}>
        {slots.map((slot, idx) => (
          <View key={idx} style={styles.slotRow}>
            {/* Dot + Connector */}
            <View style={styles.dotContainer}>
              <View style={styles.dot} />
              {idx !== slots.length - 1 && <View style={styles.line} />}
            </View>

            {/* Activity */}
            <Text style={styles.activityText}>
              {slot.charAt(0).toUpperCase() + slot.slice(1)}:{" "}
              {getActivity(slot)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginBottom: 18,
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#F9EEFF",
    fontFamily: "Times-Roman", // serif font applied here
  },
  dayHeader: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#321E5D",
    marginBottom: 8,
  },
  timeline: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  slotRow: {
    flexDirection: "row",
    alignItems: "flex-center",
    marginBottom: 8,
  },
  dotContainer: {
    width: 16,
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#321E5D",
  },
  line: {
    width: 2,
    height: 12,
    flex: 1,
    backgroundColor: "#321E5D",
    marginTop: 2,
  },
  activityText: {
    fontSize: 10,
    color: "#1e3a8a",
    marginLeft: 8,
    lineHeight: 1.5,
    fontFamily: "Times-Roman", // ensure text also uses serif
  },
};

export default DayPlan;
