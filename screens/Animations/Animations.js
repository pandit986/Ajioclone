import React, { useRef, useEffect } from 'react';
import { Animated, View, Button, StyleSheet } from 'react-native';

const Animations = () => {
        const fadeAnim = useRef(new Animated.Value(0)).current;

        const fadeIn = () => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }).start();
        };

        useEffect(() => {
            fadeIn();
        }, []);

        return (
            <View style={styles.container}>
                <Animated.View style={{ ...styles.box, opacity: fadeAnim }} />
                <Button title="Fade In" onPress={fadeIn} />
            </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
});

export default Animations
    ;
