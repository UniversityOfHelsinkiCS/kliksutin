import React, { useState } from 'react'
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import useSurvey from '../../../hooks/useSurvey'
import useQuestions from '../../../hooks/useQuestions'

import { LanguageSelect, QuestionSelect } from '../Select'
import EditOptions from './EditOptions'
import EditQuestion from './EditQuestion'

import { Question, Locales } from '../../../types'
import NewQuestionForm from './NewQuestionForm'
import NewOptionForm from './NewOptionForm'

const OptionSection = ({
  selectedQuestion,
  selectedLanguage,
}: {
  selectedQuestion: Question
  selectedLanguage: keyof Locales
}) => {
  const { t } = useTranslation()
  const [openNewOption, setOpenNewOption] = useState(false)

  const options = selectedQuestion?.optionData.options || []

  if (options.length === 0) return null

  return (
    <Box sx={{ mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          my: 4,
          justifyContent: 'flex-start',
        }}
      >
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:questionOptionViewInfo')}
        </Typography>
        <Button
          sx={{ position: 'absolute', right: 0, mr: 4, alignSelf: 'center' }}
          variant="contained"
          onClick={() => setOpenNewOption(!openNewOption)}
        >
          {t('admin:optionAddNew')}
        </Button>
      </Box>

      {options.map((option, index) => (
        <EditOptions
          key={option.id}
          option={option}
          optionNumber={index + 1}
          question={selectedQuestion}
          language={selectedLanguage}
        />
      ))}

      <NewOptionForm
        open={openNewOption}
        setOpen={setOpenNewOption}
        question={selectedQuestion}
      />
    </Box>
  )
}
const EditQuestions = () => {
  const { t } = useTranslation()
  const { survey } = useSurvey()
  const { questions, isSuccess } = useQuestions(survey?.id)

  const [questionId, setQuestionId] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')

  const [openNewQuestion, setOpenNewQuestion] = useState(false)

  const handleQuestionChange = (event: SelectChangeEvent) => {
    setQuestionId(event.target.value)
  }

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  if (!isSuccess) return null

  const selectedQuestion = questions.find(
    ({ id }) => id === (questionId as unknown as number)
  )

  return (
    <Box sx={{ mx: 2, mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          my: 4,
          justifyContent: 'flex-start',
        }}
      >
        <QuestionSelect
          questionId={questionId}
          questions={questions}
          handleChange={handleQuestionChange}
        />
        <LanguageSelect
          selectedLanguage={selectedLanguage}
          handleChange={handleLanguageChange}
        />
        <Button
          sx={{ position: 'absolute', right: 0, mr: 4, alignSelf: 'center' }}
          variant="contained"
          onClick={() => setOpenNewQuestion(!openNewQuestion)}
        >
          {t('admin:questionAddNew')}
        </Button>
      </Box>
      <Box width="100%" flexWrap="wrap">
        {selectedQuestion ? (
          <Box sx={{ my: 4 }}>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:questionViewQuestionEdit')}
            </Typography>
            <EditQuestion
              language={selectedLanguage}
              question={selectedQuestion}
              onDelete={setQuestionId}
            />
          </Box>
        ) : (
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:questionViewInfo')}
          </Typography>
        )}
        <OptionSection
          selectedQuestion={selectedQuestion}
          selectedLanguage={selectedLanguage}
        />
      </Box>

      <NewQuestionForm open={openNewQuestion} setOpen={setOpenNewQuestion} />
    </Box>
  )
}

export default EditQuestions
