import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const ListItem = props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.handlePress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
    <Prompt
          title="Codigo"
          visible={true}
          placeholder="Texto"
          textCancel="Cancelar"
          textAccept="Aceptar"
          onChange={(v) => {
            console.log(v);
          }}
 
          onCancel={(v) => {
            console.log(v);
          }}
 
          onAccept={(v) => {
            console.log(v);
          }}
        />
  </View>
)

export default ListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,.4)',
    borderBottomWidth: 1
  },
  text: {
    padding: 15

  }
})