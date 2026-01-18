import { docs } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";

// ドキュメントソースローダー
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
