import { SafeAreaView, Text } from "react-native"
// import { HelloWorldScreem } from "./src/presentation/screems/HelloWorldScreem"
import { CounterScreen } from "./src/presentation/screems/CounterScreen"
import { PaperProvider } from "react-native-paper"


export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreem name="Reinaldo Contreras" /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>

  )
}
