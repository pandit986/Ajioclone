import React from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});


const MyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Controller
                    name="username"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Username"
                                mode="outlined"
                                onBlur={(e) => {
                                    console.log('hello');
                                    onBlur(e);
                                }}
                                onChangeText={(text) => {
                                    console.log('my name ', text);
                                    onChange(text);
                                }}
                                value={value}
                                error={!!errors.username}
                            />
                            {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Email"
                                mode="outlined"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={!!errors.email}
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Email"
                                mode="flat"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={!!errors.email}
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Custom Color TextInput"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                underlineColor="blue"
                                activeUnderlineColor="green"
                                textColor="red"
                                placeholderTextColor="gray"
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Multiline TextInput"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                multiline
                                numberOfLines={4}
                                textColor="red"
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="TextInput with Icon"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                            // left={<TextInput.Icon name="email" />}
                            // right={<TextInput.Icon name="check" />}
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="TextInput with Helper Text"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                helperText="Please enter a valid email address."
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />

                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Disabled TextInput"
                                mode="outlined"
                                value={value}
                                disabled
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Password"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Password"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Password"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Password"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Password"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />
                <Controller
                    name="emailS"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Password"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                />

                <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                    Submit
                </Button>
            </View>
        </ScrollView>

    );
}

export default MyForm

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        marginTop: 25,
    },
    inputContainer: {
        marginBottom: 16,
    },
    error: {
        color: 'red',
        marginTop: 4,
    },
    button: {
        marginTop: 16,
    },
});
