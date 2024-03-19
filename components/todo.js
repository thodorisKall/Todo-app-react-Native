import { StyleSheet, Text, View } from "react-native"
import React from "react"

const todo = () => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>Todo</Text>
    </View>
  )
}

export default todo

const styles = StyleSheet.create({
  todoText: {
    textAlign: "center",
    color: "#fefefa",
    fontSize: 19,
    paddingVertical: 5,
  },
  todoContainer: {
    backgroundColor: "#353839",
    width: "80%",
  },
})
