import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { primaryColor } from "../utils/colors"
import { Constants } from 'expo';

function Header(props) {
  return (
    <View>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 15,
    fontSize: 20,
    color: 'white',
    lineHeight: 50,
    fontWeight: 'bold',
    backgroundColor: primaryColor,
  },
})

export default Header