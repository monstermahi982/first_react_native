import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [value, setValue] = useState(0);
  const fireEvent = () => {
    setValue(value + 1)
  }
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <Button
        title="monster"
        color="red"
        onPress={fireEvent}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
