import { z } from 'zod'

export const OptionZod = z.object({
  title: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
  data: z
    .object({
      fi: z.string(),
      sv: z.string(),
      en: z.string(),
    })
    .optional(),
})

export type NewOption = z.infer<typeof OptionZod>
