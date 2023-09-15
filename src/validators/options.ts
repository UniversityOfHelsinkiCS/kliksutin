import { z } from 'zod'

const Locales = z.object({
  fi: z.string().nonempty(),
  sv: z.string().nonempty(),
  en: z.string().nonempty(),
})

const Visibility = z.array(z.string())

const Subtool = z.object({
  label: z.string(),
  title: Locales,
  visibility: Visibility,
})

const ToolType = z.array(
  z.object({
    recommendationLabel: z.string(),
    subtools: z.array(Subtool),
  })
)

export const OptionZod = z.object({
  title: Locales,
  data: Locales.optional(),
})

export type NewOption = z.infer<typeof OptionZod>

export const UpdatedOptionZod = z.object({
  title: Locales,
  data: Locales.optional(),
})

export type UpdatedOption = z.infer<typeof UpdatedOptionZod>

export const UpdatedDimensionZod = z.object({
  color: z.string().optional(),
  title: Locales.optional(),
  text: Locales.optional(),
})

export type UpdatedDimension = z.infer<typeof UpdatedDimensionZod>

export const DimensionZod = z.object({
  color: z.string(),
  title: Locales,
  text: Locales,
  data: ToolType.optional(),
})

export type NewDimension = z.infer<typeof DimensionZod>
