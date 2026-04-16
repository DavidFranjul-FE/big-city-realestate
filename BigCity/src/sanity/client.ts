import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "w8bn56as",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-01",
});
