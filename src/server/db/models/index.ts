import Survey from './Survey'
import Question from './Question'
import Recommendation from './Recommendation'
import Result from './Result'

Question.belongsTo(Survey)

Survey.hasMany(Question)

export { Survey, Question, Recommendation, Result }
