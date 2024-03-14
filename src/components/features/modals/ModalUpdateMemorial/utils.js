import { z } from "zod";

export const updateCollectionValidationSchema = z
  .object({
    title: z.string().optional(),
    archive: z.string().optional(),
    link: z.string().optional(),
  })
  .partial()
  .refine(
    (obj) => {
      for (const val of Object.values(obj)) {
        if (val !== undefined && val !== "") return true;
      }
      return false;
    },
    {
      message: "Pelo menos um dos campos deve ser preenchido ",
    }
  );
