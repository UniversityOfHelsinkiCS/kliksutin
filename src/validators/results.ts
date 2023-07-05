// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod'

export const NewResultFormZod = z.object({
  optionLabel: z.string().nonempty(),
  isSelected: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
})

export type NewResultFormType = z.infer<typeof NewResultFormZod>

export const NewResultZod = z.object({
  optionLabel: z.string().nonempty(),
  isSelected: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
  data: z.record(
    z.string(),
    z.object({
      fi: z.string(),
      sv: z.string(),
      en: z.string(),
    })
  ),
})

export type NewResult = z.infer<typeof NewResultZod>

export const UpdatedResultZod = z.object({
  isSelected: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
  data: z.record(
    z.string(),
    z.object({
      fi: z.string(),
      sv: z.string(),
      en: z.string(),
    })
  ),
})

export type UpdatedResult = z.infer<typeof UpdatedResultZod>
