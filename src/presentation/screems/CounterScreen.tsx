import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"


export const CounterScreen = () => {


  const [count, setCount] = useState(10)


  const incrementOrDecrement = ( value: number ) => {
    setCount( count => count += value )
  }



  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ count }</Text>

      <Pressable
        onPress={ () => incrementOrDecrement(+1) }
        onLongPress={ () => setCount(0) }
      >
        <Text>+1</Text>
      </Pressable>
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
    }

})