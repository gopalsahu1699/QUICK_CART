import { serve } from "inngest/serve";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdatation } from "../../config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdatation,
    syncUserDeletion
  ],
});
