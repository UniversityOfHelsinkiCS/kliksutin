// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod'

export const ResultZod = z.record(
  z.object({
    optionLabel: z.string(),
    isSelected: z.object({
      fi: z.string().nonempty(),
      sv: z.string().nonempty(),
      en: z.string().nonempty(),
    }),
    data: z.object({
      allDimensions: z.object({
        fi: z.string(),
        sv: z.string(),
        en: z.string(),
      }),
      investication: z.object({
        fi: z.string(),
        sv: z.string(),
        en: z.string(),
      }),
      production: z.object({
        fi: z.string(),
        sv: z.string(),
        en: z.string(),
      }),
      collaboration: z.object({
        fi: z.string(),
        sv: z.string(),
        en: z.string(),
      }),
      discussion: z.object({
        fi: z.string(),
        sv: z.string(),
        en: z.string(),
      }),
      acquisition: z.object({
        fi: z.string(),
        sv: z.string(),
        en: z.string(),
      }),
      practice: z.object({
        fi: z.string(),
        sv: z.string(),
        en: z.string(),
      }),
    }),
  })
)

export type NewResult = z.infer<typeof ResultZod>
