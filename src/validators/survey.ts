import { z } from 'zod'

export const UpdatedSurveyInfoZod = z.object({
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

export type UpdatedSurveyInfo = z.infer<typeof UpdatedSurveyInfoZod>
