import { currentUser } from "@clerk/nextjs/server";
import { databases, ID } from '@/lib/appwrite';

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  // Make Appwrite calls here, e.g., listing documents for user
  // await appwrite.database.listDocuments(...)
  return new Response(JSON.stringify({ message: "Success!", clerkId: user.id }), {
    status: 200,
  });
}


const databaseId = '<DATABASE_ID>'; // Your database ID
const collectionId = '<COLLECTION_ID>'; // Your collection ID

async function createDocument(data) {
  return await databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(), 
    data
  );
}

async function listDocuments() {
  return await databases.listDocuments(databaseId, collectionId);
}


async function getDocument(documentId) {
  return await databases.getDocument(databaseId, collectionId, documentId);
}
