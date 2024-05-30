import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const VerticalScrollView = () => {
    return (
        <ScrollView style={styles.scrollView}>
            {[...Array(20).keys()].map((item) => (
                <Text key={item} style={styles.item}>
                    Item {item + 1}
                </Text>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        padding: 16,
    },
    item: {
        marginBottom: 16,
        fontSize: 18,
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
    },
});

export default VerticalScrollView;
