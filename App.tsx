import { SafeAreaView, Text } from "react-native"
import { HelloWorldScreem } from "./src/presentation/screems/HelloWorldScreem"
import { CounterScreen } from "./src/presentation/screems/CounterScreen"


export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreem name="Reinaldo Contreras" /> */}
      <CounterScreen />
    </SafeAreaView>
  )
}
