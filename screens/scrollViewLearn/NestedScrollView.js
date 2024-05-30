import React from 'react';
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from 'react-native';

const NestedScrollView = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.header}>Nested ScrollView</Text>
                <ScrollView horizontal style={styles.horizontalScrollView} >
                    {[...Array(10).keys()].map((item) => (
                        <View key={item} style={styles.itemContainer}>
                            <Text style={styles.item}>Item {item + 1}</Text>
                        </View>
                    ))}
                </ScrollView>
                <Text style={styles.text}>
                    More content goes here. This is an example of nested ScrollView.
                </Text>
                {[...Array(10).keys()].map((item) => (
                    <Text key={item} style={styles.item}>
                        Vertical Item {item + 1}
                    </Text>
                ))}
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'blue',
    },
    scrollView: {
        flex: 1,
        padding: 16,
    },
    horizontalScrollView: {
        marginVertical: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    itemContainer: {
        marginRight: 16,
    },
    item: {
        fontSize: 18,
        backgroundColor: "aqua",
        padding: 16,
        borderRadius: 8,
        minWidth: 100,
        textAlign: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default NestedScrollView;
