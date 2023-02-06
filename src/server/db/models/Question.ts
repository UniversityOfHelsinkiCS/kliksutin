import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize'

import { sequelize } from '../connection'

// import { TranslatedText } from './../../types'

interface Option {
  id: string
  label: any
}

interface OptionData {
  type: 'singleChoice' | 'multipleChoice' | 'text'
  options: Array<Option>
}

interface Visibility {
  optionIds: Array<string>
}

class Question extends Model<
  InferAttributes<Question>,
  InferCreationAttributes<Question>
> {
  declare id: CreationOptional<number>

  declare surveyId: number

  declare parentId: number

  declare priority: number

  declare title: any

  declare text: any

  declare optionData: OptionData

  declare visibility: Visibility
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    surveyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {},
    },
    text: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    optionData: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {},
    },
    visibility: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {},
    },
  },
  {
    underscored: true,
    sequelize,
  }
)

export default Question
