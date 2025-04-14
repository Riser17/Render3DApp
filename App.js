/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyScene from './MyScene';
import { CameraPan } from './Camera';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>3D Model Viewer</Text>
        <CameraPan />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: '90%',
    width: '90%',
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default App;

