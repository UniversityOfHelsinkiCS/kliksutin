// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod'

export const QuestionZod = z.object({
  parentId: z.number().nullable().optional(),
  priority: z.number().min(0).nonnegative(),
  title: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
  text: z
    .object({
      fi: z.string().nonempty(),
      sv: z.string().nonempty(),
      en: z.string().nonempty(),
    })
    .optional(),
  optionData: z
    .object({
      type: z.string().nonempty(),
      options: z
        .array(
          z.object({
            title: z.object({
              fi: z.string().nonempty(),
              sv: z.string().nonempty(),
              en: z.string().nonempty(),
            }),
            data: z
              .object({
                fi: z.string().nonempty(),
                sv: z.string().nonempty(),
                en: z.string().nonempty(),
              })
              .optional(),
          })
        )
        .optional(),
    })
    .optional(),
  visibility: z
    .object({
      options: z.array(z.unknown()).optional(),
    })
    .optional(),
})

export type NewQuestion = z.infer<typeof QuestionZod>
