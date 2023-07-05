import { z } from 'zod'

export const RecommendationZod = z.object({
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

export type NewRecommendation = z.infer<typeof RecommendationZod>

export const RecommendationUpdateZod = z.object({
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

export type RecommendationUpdates = z.infer<typeof RecommendationUpdateZod>
