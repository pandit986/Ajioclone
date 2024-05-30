import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const HorizontalScrollView = () => {
  return (
    <ScrollView horizontal style={styles.scrollView}>
      {[...Array(20).keys()].map((item) => (
        <View key={item} style={styles.itemContainer}>
          <Text style={styles.item}>Item {item + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginRight: 16,
  },
  item: {
    fontSize: 18,
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    minWidth: 100,
    textAlign: 'center',
  },
});

export default HorizontalScrollView;
