import { Question } from '../db/models'

// eslint-disable-next-line import/prefer-default-export
export const nextAvailablePriority = async (parentId: number | null) => {
  let result = 1

  const priority: number = await Question.max('priority', {
    where: { parentId },
  })

  if (priority === null) return 0

  result += priority

  return result
}
