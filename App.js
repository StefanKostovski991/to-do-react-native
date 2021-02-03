import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoMake from "./Components/to-do";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoMake />
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
