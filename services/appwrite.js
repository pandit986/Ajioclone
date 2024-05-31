// src/services/appwrite.js
import { Client, Account, ID } from 'react-native-appwrite'

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6659635800065746daf2")
    .setPlatform("com.testwrite.app")

const account = new Account(client);

export { client, account };
