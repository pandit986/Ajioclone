// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

function HomeScreen({ navigation }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <Button mode="contained" onPress={() => dispatch(increment())}>
        Increment
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      >
        Go to Details
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Animations')}
        style={styles.button}
      >
        Go to Animations
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('HandlingGestures')}
        style={styles.button}
      >
        Go to HandlingGestures
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
