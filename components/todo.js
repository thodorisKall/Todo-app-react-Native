import { StyleSheet, Text, View } from "react-native"
import React from "react"

const todo = (props) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>{props.title}</Text>
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
    width: 270,
  },
  todoButton: {
    fontSize: 28,
    color: "red",
  },
})
