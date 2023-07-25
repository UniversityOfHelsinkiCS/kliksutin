import { Op } from 'sequelize'
import { Question } from '../db/models'

// eslint-disable-next-line import/prefer-default-export
export const nextAvailablePriority = async (parentId: number | null) => {
  let result = 1

  if (!parentId) {
    const priority: number = await Question.max('priority', {
      where: {
        parentId: {
          [Op.is]: null,
        },
      },
    })

    result += priority
  } else {
    const priority: number = await Question.max('priority', {
      where: { parentId },
    })

    result += priority
  }

  return result
}
