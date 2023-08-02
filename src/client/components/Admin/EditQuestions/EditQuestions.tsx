import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

import { Question, Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'

import EditOptions from './EditOptions'
import EditQuestion from './EditQuestion'

import NewOptionForm from './NewOptionForm'

const OptionSection = ({
  selectedQuestion,
  selectedLanguage,
}: {
  selectedQuestion: Question | undefined
  selectedLanguage: keyof Locales
}) => {
  const { t } = useTranslation()
  const [openNewOption, setOpenNewOption] = useState(false)

  if (!selectedQuestion || selectedQuestion.optionData.type === 'info')
    return null

  const options = selectedQuestion?.optionData.options || []

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
  const navigate = useNavigate()
  const location = useLocation()
  const { questionId } = useParams()
  const [searchParams] = useSearchParams()
  const { survey, isLoading } = useSurvey()

  if (isLoading || !survey || !questionId) return null

  const selectedLanguage = searchParams.get('transLang') as keyof Locales

  const selectedQuestion = survey.Questions.find(
    (question) => question.id === Number(questionId)
  )

  const handleQuestionDeletion = () => {
    navigate({
      pathname: '/admin/edit-questions',
      search: location.search,
    })
  }

  return (
    <Box width="100%" flexWrap="wrap">
      {selectedQuestion ? (
        <Box sx={{ my: 4 }}>
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:questionViewQuestionEdit')}
          </Typography>
          <EditQuestion
            language={selectedLanguage}
            question={selectedQuestion}
            onDelete={handleQuestionDeletion}
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
  )
}

export default EditQuestions
