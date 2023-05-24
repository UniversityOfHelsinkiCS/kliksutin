// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod'

export const RecommendationZod = z.object({
  label: z.string().nonempty(),
  type: z.string().nonempty(),
  title: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
  text: z.object({
    fi: z.string().nonempty(),
    sv: z.string().nonempty(),
    en: z.string().nonempty(),
  }),
})

export type NewRecommendation = z.infer<typeof RecommendationZod>
