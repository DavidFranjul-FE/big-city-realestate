import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageRef } from "../types/property";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageRef) => builder.image(source);
