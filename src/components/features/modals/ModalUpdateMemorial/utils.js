import { z } from "zod";

export const updateCollectionValidationSchema = z.object({
  title: z
    .string()

    .optional(),
  link: z
    .string()

    .optional(),

  archive: z
    .string()

    .optional(),
});
