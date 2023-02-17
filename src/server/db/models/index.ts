import Survey from './Survey'
import Question from './Question'
import Recommendation from './Recommendation'

Question.belongsTo(Survey)

Survey.hasMany(Question)

export { Survey, Question, Recommendation }
