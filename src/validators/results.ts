// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod'

export const ResultZod = z.object({
  optionLabel: z.string().nonempty(),
  isSelected: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
})

export type NewResult = z.infer<typeof ResultZod>
