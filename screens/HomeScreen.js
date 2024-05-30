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
        onPress={() => navigation.navigate('VerticalScrollView')}
        style={styles.button}
      >
        Go to VerticalScrollView frf
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('HorizontalScrollView')}
        style={styles.button}
      >
        Go to HorizontalScrollView
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('MixedContentScrollView')}
        style={styles.button}
      >
        Go to MixedContentScrollView
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('ScrollViewWithRefresh')}
        style={styles.button}
      >
        Go to ScrollViewWithRefresh
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('NestedScrollView')}
        style={styles.button}
      >
        Go to NestedScrollView
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
