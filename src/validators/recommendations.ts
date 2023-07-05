import { z } from 'zod'

export const NewRecommendationZod = z.object({
  label: z.string().nonempty(),
  type: z.string().nonempty(),
  dimensions: z.record(z.string(), z.boolean()),
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

export type NewRecommendation = z.infer<typeof NewRecommendationZod>

export const UpdatedRecommendationZod = z.object({
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

export type UpdatedRecommendation = z.infer<typeof UpdatedRecommendationZod>
