// config/ingest.js
import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "quick-cart",
  name: "Quick Cart App",
});

// Example functions
export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-creation" },
  { event: "user/created" },
  async ({ event }) => {
    console.log("User created:", event.data);
    return { success: true };
  }
);

export const syncUserDeletion = inngest.createFunction(
  { id: "sync-user-deletion" },
  { event: "user/deleted" },
  async ({ event }) => {
    console.log("User deleted:", event.data);
    return { success: true };
  }
);

export const syncUserUpdatation = inngest.createFunction(
  { id: "sync-user-updatation" },
  { event: "user/updated" },
  async ({ event }) => {
    console.log("User updated:", event.data);
    return { success: true };
  }
);
