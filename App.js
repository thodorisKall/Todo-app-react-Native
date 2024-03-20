import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native"
import { useState } from "react"
import Todo from "./components/todo"

export default function App() {
  const [todo, setTodo] = useState("")
  const [tasks, setTasks] = useState([])

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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWraper}
      >
        <TextInput
          style={styles.inputText}
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <View>
          <TouchableOpacity style={styles.inputButton} onPress={handlePress}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  inputWraper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    height: 50,
    position: "absolute",
    bottom: 40,
  },
  inputText: {
    paddingLeft: 28,
    color: "white",
    width: "70%",
    fontSize: 20,
    borderRadius: 50,
    backgroundColor: "#353839",
  },
  inputButton: {
    backgroundColor: "#353839",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#5f9ea0",
    fontSize: 30,
  },
})
