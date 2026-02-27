import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config();

const requiredVars = ["SANITY_PROJECT_ID", "SANITY_DATASET"];
const missingVars = requiredVars.filter((name) => !process.env[name]);

if (missingVars.length > 0) {
  throw new Error(`Missing required Sanity env vars: ${missingVars.join(", ")}`);
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || "2024-10-01",
  useCdn: process.env.SANITY_USE_CDN !== "false",
  token: process.env.SANITY_READ_TOKEN || undefined
});

export default client;
