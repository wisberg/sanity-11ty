import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes/index.js";
import RebuildTool from "./tools/rebuildTool.jsx";
const nodeEnv = typeof process !== "undefined" ? process.env : {};
const projectId =
  import.meta.env?.SANITY_STUDIO_PROJECT_ID ||
  import.meta.env?.SANITY_PROJECT_ID ||
  nodeEnv.SANITY_PROJECT_ID;
const dataset =
  import.meta.env?.SANITY_STUDIO_DATASET ||
  import.meta.env?.SANITY_DATASET ||
  nodeEnv.SANITY_DATASET;
const rebuildWebhook =
  import.meta.env?.SANITY_STUDIO_REBUILD_HOOK ||
  import.meta.env?.SANITY_REBUILD_HOOK ||
  nodeEnv.SANITY_REBUILD_HOOK;

const requiredVars = [
  { name: "SANITY_PROJECT_ID", value: projectId },
  { name: "SANITY_DATASET", value: dataset }
];
const missingVars = requiredVars
  .filter(({ value }) => !value)
  .map(({ name }) => name);

if (missingVars.length > 0) {
  throw new Error(
    `Missing required Sanity env vars: ${missingVars.join(", ")}. ` +
      `For Studio, set SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET in studio/.env.`
  );
}

export default defineConfig({
  name: "default",
  title: "Simple Component Site",
  projectId,
  dataset,
  plugins: [
    deskTool({
      name: "structure",
      title: "Structure",
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("siteSettings")
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("page").title("Pages"),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) =>
                ![
                  "page",
                  "siteSettings",
                  "sanity.imageAsset",
                  "sanity.fileAsset"
                ].includes(item.getId())
            )
          ])
    }),
    deskTool({
      name: "media",
      title: "Media",
      structure: (S) =>
        S.list()
          .title("Media")
          .items([
            S.documentTypeListItem("sanity.imageAsset").title("Images"),
            S.documentTypeListItem("sanity.fileAsset").title("Files")
          ])
    }),
    visionTool()
  ],
  tools: (prev) => [
    ...prev,
    {
      name: "rebuild",
      title: "Rebuild",
      component: RebuildTool,
      options: { webhookUrl: rebuildWebhook }
    }
  ],
  schema: {
    types: schemaTypes
  }
});
