import { useState } from "react"
import { Text, View } from "react-native"

import { globalStyles } from '../themes/global.styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { FAB } from "react-native-paper"

export const CounterM3Screen = () => {


  const [count, setCount] = useState(10)


  const onPress = ( value: number ) => {
    setCount( count => count += value )
  }



  return (
    <View style={ globalStyles.centerContainer }>
      <Text style={ globalStyles.title }>{ count }</Text>

      <Icon name="accessibility-outline" size={ 25 } />

      <FAB
        style={ globalStyles.fab }
        onPress={() => onPress(+1)}
        onLongPress={() => setCount(0)}
        icon="add"
      />


    </View>
  )
}


