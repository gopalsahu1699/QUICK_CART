import { serve } from "inngest/next";
import { inngest } from "../../../config/ingest";
import { syncUserCreation, syncUserDeletion, syncUserUpdatation } from "@/config/ingest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    syncUserCreation,
    syncUserUpdatation,
    syncUserDeletion
  ],
});