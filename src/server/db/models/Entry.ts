import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize'

import { sequelize } from '../connection'
import { FormValues } from '../../types'

class Entry extends Model<
  InferAttributes<Entry>,
  InferCreationAttributes<Entry>
> {
  declare id: CreationOptional<number>

  declare surveyId: number

  declare userId: string

  declare data: FormValues

  declare sessionToken: string

  declare receiveReminder: CreationOptional<boolean>

  declare reminderSent: CreationOptional<boolean>

  declare reminderSentAt: CreationOptional<Date>
}

Entry.init(
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
    userId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    sessionToken: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    receiveReminder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    reminderSent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    reminderSentAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    underscored: true,
    sequelize,
  }
)

export default Entry
