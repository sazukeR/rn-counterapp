import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export const HelloWorldScreem = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        fontSize: 45,
        textAlign: "center",
        color: "black",
        padding: 20,
    }
})
