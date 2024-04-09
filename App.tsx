import { SafeAreaView, Text } from "react-native"
// import { HelloWorldScreem } from "./src/presentation/screems/HelloWorldScreem"
// import { CounterScreen } from "./src/presentation/screems/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screems/CounterM3Screen"

import IonIcon from 'react-native-vector-icons/Ionicons'

export const App = () => {
  return (
    <PaperProvider settings={{
      icon: (props) => <IonIcon {...props} />
    }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreem name="Reinaldo Contreras" /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>

  )
}
