// Footer.jsx
import React from "react";
import { View, Image, StyleSheet } from "@react-pdf/renderer";

const PAGE_WIDTH = 595; // Standard A4 width

const Footer = () => {
  return (
    <View style={styles.container}>
      {/* Footer Container */}
      <View style={styles.footer}>
        {/* Logo 1 */}
        <Image
          src="https://res.cloudinary.com/dgquw6oma/image/upload/v1760694518/Group_1618873499_itmzrp.png"
          style={styles.logo1}
        />

        {/* Spacing */}
        <View style={{ height: 10 }} />

        {/* Logo 2 */}
        <Image
          src="https://res.cloudinary.com/dgquw6oma/image/upload/v1760694513/Group_1618874137_ccv7n6.png"
          style={styles.logo2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end", // Push footer to the bottom of available space
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    width: "100%",
  },
  logo1: {
    width: 140,
    height: 35,
    objectFit: "contain",
  },
  logo2: {
    width: PAGE_WIDTH - 100, // leave 50pt space on each side
    height: 40,
    objectFit: "cover",
  },
});

export default Footer;
