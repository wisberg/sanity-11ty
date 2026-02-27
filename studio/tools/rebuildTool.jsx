import React, { useState } from "react";
import { Box, Button, Card, Stack, Text, TextInput } from "@sanity/ui";

export default function RebuildTool({ tool }) {
  const initialWebhook = tool?.options?.webhookUrl || "";
  const [webhookUrl, setWebhookUrl] = useState(initialWebhook);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const triggerRebuild = async () => {
    if (!webhookUrl) {
      setStatus({
        state: "error",
        message: "Add a rebuild hook URL to trigger a deploy."
      });
      return;
    }
    setStatus({ state: "loading", message: "Triggering rebuild..." });
    try {
      const response = await fetch(webhookUrl, { method: "POST" });
      if (!response.ok) {
        throw new Error(`Hook returned ${response.status}`);
      }
      setStatus({ state: "success", message: "Rebuild triggered." });
    } catch (error) {
      setStatus({
        state: "error",
        message: error?.message || "Failed to trigger rebuild."
      });
    }
  };

  return (
    <Card padding={4} radius={3} shadow={1}>
      <Stack space={4}>
        <Stack space={2}>
          <Text size={2} weight="semibold">
            Rebuild Eleventy
          </Text>
          <Text size={1} muted>
            Paste your build hook URL (Netlify/Vercel/etc.) and trigger a prod
            rebuild.
          </Text>
        </Stack>
        <Box>
          <TextInput
            value={webhookUrl}
            onChange={(event) => setWebhookUrl(event.currentTarget.value)}
            placeholder="https://api.netlify.com/build_hooks/..."
          />
        </Box>
        <Button
          text={status.state === "loading" ? "Rebuilding..." : "Rebuild Production"}
          mode="primary"
          onClick={triggerRebuild}
          disabled={status.state === "loading"}
        />
        {status.message ? (
          <Text size={1} muted={status.state !== "error"}>
            {status.message}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}
