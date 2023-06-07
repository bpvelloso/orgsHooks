import { SafeAreaView, Text } from "react-native";
import Home from "./src/telas/Home";

export default function App() {
  return (
    <SafeAreaView style={{flex:1, padding:5}}>
      <Home/>
    </SafeAreaView>
  )
}