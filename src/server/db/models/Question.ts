import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize'

import { sequelize } from '../connection.js'

interface OptionData {
  type: 'singleChoice' | 'multipleChoice' | 'text'
  options: Array<any>
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

  declare title: string

  declare text: string

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
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    text: {
      type: DataTypes.TEXT,
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
