import Survey from './Survey'
import Question from './Question'

Question.belongsTo(Survey)

Survey.hasMany(Question)

export { Survey, Question }
