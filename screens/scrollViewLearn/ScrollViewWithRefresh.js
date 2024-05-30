import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';

const ScrollViewWithRefresh = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000); 
    };

    return (
        <ScrollView
            style={styles.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
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

export default ScrollViewWithRefresh;
