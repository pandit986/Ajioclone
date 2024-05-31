// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { account } from '../../services/appwrite';
import { v4 as uuidv4 } from 'uuid';
import { ID } from 'react-native-appwrite'


const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            let name = "abhishek"
            await account.create(ID.unique(), email, password, name)
            console.log("Successfully created account")
            // await account.createSession(email, password);
            navigation.navigate('LoginScreen');
        } catch (err) {
            console.log('Registration error:', err);
            setError('Registration failed. Please try again.');
        }
    };
    // console.log(account)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 10,

    },
    error: {
        color: 'red',
        marginBottom: 16,
        textAlign: 'center',
    },
});

export default RegisterScreen;
