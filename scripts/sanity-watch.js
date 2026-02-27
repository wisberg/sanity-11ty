import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { createClient } from "@sanity/client";

dotenv.config();

const requiredVars = ["SANITY_PROJECT_ID", "SANITY_DATASET"];
const missingVars = requiredVars.filter((name) => !process.env[name]);
if (missingVars.length > 0) {
  console.error(
    `Missing required Sanity env vars for watcher: ${missingVars.join(", ")}`
  );
  process.exit(1);
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || "2024-10-01",
  useCdn: false
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const refreshFile = path.join(__dirname, "..", "src", "_data", "sanityRefresh.json");
const pollInterval = Number(process.env.SANITY_POLL_INTERVAL || 5000);

let lastUpdatedAt = null;

async function touchRefreshFile(updatedAt) {
  const payload = {
    updatedAt,
    refreshedAt: new Date().toISOString()
  };
  const tmpFile = `${refreshFile}.tmp`;
  await fs.writeFile(tmpFile, `${JSON.stringify(payload, null, 2)}\n`);
  await fs.rename(tmpFile, refreshFile);
}

async function poll() {
  try {
    const updatedAt = await client.fetch(
      `*[_type in ["page", "siteSettings"]] | order(_updatedAt desc)[0]._updatedAt`
    );
    if (updatedAt && updatedAt !== lastUpdatedAt) {
      lastUpdatedAt = updatedAt;
      await touchRefreshFile(updatedAt);
      console.log(`[sanity-watch] change detected at ${updatedAt}`);
    }
  } catch (error) {
    console.error("[sanity-watch] error polling Sanity:", error?.message || error);
  }
}

console.log(`[sanity-watch] polling every ${pollInterval}ms`);
poll();
setInterval(poll, pollInterval);
