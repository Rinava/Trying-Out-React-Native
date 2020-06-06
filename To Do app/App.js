import React, { Component } from 'react'
import { View, Text, StyleSheet, CheckBox, ScrollView, Button, TextInput } from 'react-native'


export default class App extends React.Component  {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
          title="See Completed"></Button>
        </View>
        <TextInput placeholder="Give me more tasks :)"></TextInput>
        <Button 
        title="Add"></Button>
        <Text>To Do:</Text>
        <ScrollView>
          <Text>Example 1</Text>
          <CheckBox></CheckBox>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
