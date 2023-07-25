import { z } from 'zod'

export const NewQuestionZod = z.object({
  parentId: z.number().nullable(),
  title: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
  text: z
    .object({
      fi: z.string(),
      sv: z.string(),
      en: z.string(),
    })
    .optional(),
  optionData: z.object({
    type: z.string().nonempty(),
    options: z.array(
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
    ),
  }),
  visibility: z.object({
    options: z.array(z.string()).optional(),
  }),
})

export type NewQuestion = z.infer<typeof NewQuestionZod>

export const UpdatedQuestionZod = z.object({
  title: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
  text: z.object({
    fi: z.string(),
    sv: z.string(),
    en: z.string(),
  }),
})

export type UpdatedQuestion = z.infer<typeof UpdatedQuestionZod>

export const UpdatedQuestionLocationZod = z.object({
  parentId: z.number().nullable(),
  priority: z.number().min(0),
})

export type UpdatedQuestionLocation = z.infer<typeof UpdatedQuestionLocationZod>
