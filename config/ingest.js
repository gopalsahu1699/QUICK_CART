import { Inngest } from "inngest";
import connectDB from "./db";
import User from "./models/user";  // use relative path, not "@/"

export const inngest = new Inngest({ id: "quick-Cart-gp" });

export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    await connectDB();
    await User.create({
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      imageUrl: image_url,
    });
  }
);

export const syncUserUpdatation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    await connectDB();
    await User.findByIdAndUpdate(id, {
      name: first_name + " " + last_name,
      email: email_addresses[0].email_address,
      imageUrl: image_url,
    });
  }
);

export const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    await User.findByIdAndDelete(event.data.id);
  }
);
