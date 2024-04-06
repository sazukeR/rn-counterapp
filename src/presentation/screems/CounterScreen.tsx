import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
// import { PrimaryButton } from "../../components"
import { Button } from "react-native-paper"


export const CounterScreen = () => {


  const [count, setCount] = useState(10)


  const onPress = ( value: number ) => {
    setCount( count => count += value )
  }



  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ count }</Text>

      {/* <PrimaryButton label="Incrementar" onPress={() => onPress(+1)} onLongPress={() => setCount(0)}  /> */}

      <Button onPress={() => onPress(+1)} onLongPress={() => setCount(0)} mode="contained">
        Incrementar
      </Button>

    </View>
  )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 80,
        fontWeight: "300",
        color: "black",
    },



})