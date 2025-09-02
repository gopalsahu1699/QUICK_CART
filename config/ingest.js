import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/user";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quick-Cart-gp" });


// ingest function to save user data to Database

export const syncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk'},
    { event: 'clerk/user.created' },
    async ({ event, step }) => {
        const {id, first_name, last_name,  email_addresses, image_url} = event.data; 
        const userData = {
            _id : id,
            email : email_addresses[0].email_address,
            name : first_name + " " + last_name,
            imageUrl : image_url,
        }

        await connectDB();
        await User.create(userData);
    }

)


// ingest to update to user data to Database

export const syncUserUpdatation = inngest.createFunction(
    { id: 'update-user-from-clerk'},
    { event: 'clerk/user.updated' },
    async ({ event, step }) => {
        const {id, first_name, last_name,  email_addresses, image_url} = event.data;    
        const userData = {
            name : first_name + " " + last_name,
            email : email_addresses[0].email_address,
            imageUrl : image_url,
        }
        await connectDB();
        await User.findByIdAndUpdate(id, userData);
    }
)

// ingest to delete user data from Database

export const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-from-clerk'},
    { event: 'clerk/user.deleted' },
    async ({ event, step }) => {
        const {id} = event.data;    
        await connectDB();
        await User.findByIdAndDelete(id);
    }   
)
