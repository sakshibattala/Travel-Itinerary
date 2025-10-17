import { StyleSheet } from "@react-pdf/renderer";

const pdfStyles = StyleSheet.create({
  page: {
    padding: 25,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#fefefe",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3b82f6",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  label: {
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    fontSize: 10,
    textAlign: "center",
    color: "#666",
  },
});

export default pdfStyles;
