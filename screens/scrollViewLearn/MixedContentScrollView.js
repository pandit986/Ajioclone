import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';

const MixedContentScrollView = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <Text style={styles.header}>Header</Text>
            <Image source={{ uri: 'https://placekitten.com/400/200' }} style={styles.image} />
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            </Text>
            <Image source={{ uri: 'https://placekitten.com/400/200' }} style={styles.image} />
            <Text style={styles.text}>
                Cras aliquet, nisl in volutpat volutpat, lorem orci viverra erat, nec suscipit arcu justo id erat.
            </Text>
            <Image source={{ uri: 'https://placekitten.com/400/200' }} style={styles.image} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default MixedContentScrollView;
