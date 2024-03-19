import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native"
import { useState } from "react"
import Todo from "./components/todo"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Todo list</Text>
      </View>
      <View style={styles.test}>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
    backgroundColor: "#242124",
  },
  headerContainer: {
    backgroundColor: "#5f9ea0",
    paddingTop: 45,
    width: "100%",
    height: "12%",
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  test: {
    marginTop: 30,
    alignItems: "center",
    gap: 14,
    width: "100%",
  },
})
