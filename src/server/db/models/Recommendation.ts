import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize'

import { sequelize } from '../connection'
import { TranslatedText } from '../../types'

class Recommendation extends Model<
  InferAttributes<Recommendation>,
  InferCreationAttributes<Recommendation>
> {
  declare id: CreationOptional<number>

  declare name: TranslatedText

  declare text: TranslatedText
}

Recommendation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    text: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize,
  }
)

export default Recommendation
