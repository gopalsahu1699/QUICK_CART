import { serve } from "inngest/next";  
import { inngest } from "../../../config/ingest";  
import { syncUserCreation, syncUserDeletion, syncUserUpdatation } from "../../../config/ingest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdatation,
    syncUserDeletion
  ],
});
