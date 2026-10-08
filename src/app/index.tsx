import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/profile.jpg")} style={styles.image} />
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.line} />

      <Text style={styles.label}>Name</Text>
      <Text style={styles.value}>Tharindu Rashmika</Text>

      <Text style={styles.label}>Email</Text>
      <Text style={styles.value}>trmadarasingha@students.nsbm.ac.</Text>

      <Text style={styles.label}>Points</Text>
      <Text style={styles.value}>100</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  line: {
    height: 1,
    backgroundColor: "black",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    marginBottom: 20,
  },
});
