// Header.jsx
import React from "react";
import { View, Text, Image, Font } from "@react-pdf/renderer";

const Header = ({ logoUrl, name, destination, days, nights }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      {logoUrl && <Image src={logoUrl} style={styles.logo} />}

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.greeting}>Hi, {name || "Traveler"}!</Text>
        <Text style={styles.destination}>
          {destination || "Destination"} Itinerary
        </Text>
        <Text style={styles.duration}>
          {days || 0} Days • {nights || 0} Nights
        </Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 40,
    marginBottom: 10,
    objectFit: "contain",
  },
  infoBox: {
    width: "90%",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3b82f6",
    alignItems: "center",
    backgroundColor: "#936FE0", // solid gradient color
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  destination: {
    fontSize: 14,
    marginBottom: 3,
    fontWeight: "semibold",
    color: "#fff",
  },
  duration: {
    fontSize: 12,
    color: "#fff",
  },
};

export default Header;
