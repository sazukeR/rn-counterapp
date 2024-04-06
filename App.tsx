import { SafeAreaView, Text } from "react-native"
import { HelloWorldScreem } from "./src/presentation/screems/HelloWorldScreem"


export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWorldScreem name="Reinaldo Contreras" />
    </SafeAreaView>
  )
}
