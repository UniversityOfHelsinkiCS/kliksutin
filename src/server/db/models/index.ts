import Survey from './Survey.js'
import Question from './Question.js'

Question.belongsTo(Survey)

Survey.hasMany(Question)

export { Survey, Question }
