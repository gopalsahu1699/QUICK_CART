import { Client, Databases, Account } from 'appwrite';

export const client = new Client()
  .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Replace with your region
  .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
