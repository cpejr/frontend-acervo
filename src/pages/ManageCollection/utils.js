import { z } from "zod";

export const newCollectionValidationSchema = z.object({
  title: z
    .string({ required_error: "O título é obrigatório" })
    .min(2, { message: "O título deve ter pelo menos 2 caracteres" })
    .max(60, { message: "O título não pode exceder 60 caracteres" }),
  link: z
    .string({ required_error: "o link" })
    .min(1, { message: "O URL deve ter pelo menos 1 caracter" }),
  shortDescription: z
    .string({ required_error: "A descrição curta é obrigatória" })
    .min(1, { message: "Campo obrigatório" }),
  longDescription: z
    .string({ required_error: "A descrição longa é obrigatória" })
    .min(20, { message: "A descrição longa deve ter pelo menos 20 caracteres" })
    .max(750, { message: "A descrição longa não pode exceder 750 caracteres" }),
  archives: z
    .object()

    .refine(
      (data) => {
        // Retorna verdadeiro se todos os campos que começam com "archive" são strings
        return Object.keys(data).every(
          (key) => key.startsWith("archive") && typeof data[key] === "string"
        );
      },
      {
        message: "Todos os campos de arquivo devem ser strings",
      }
    ),
});
