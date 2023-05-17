import React, { useState, useEffect } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import useEditQuestionMutation from '../../../hooks/useEditQuestionMutation'

import { Locales, Question } from '../../../types'
import { QuestionsUpdates } from '../../../../server/types'

const QuestionItem = ({
  language,
  question,
}: {
  language: keyof Locales
  question: Question
}) => {
  const { t } = useTranslation()
  const mutation = useEditQuestionMutation(question.id)
  const [questionTitle, setQuestionTitle] = useState(question.title[language])
  const [questionText, setQuestionText] = useState(question.text[language])

  useEffect(() => {
    setQuestionTitle(question.title[language])
    setQuestionText(question.text[language])
  }, [language, question])

  const handleSave = async () => {
    const updatedQuestion: QuestionsUpdates = {
      title: {
        ...question.title,
        [language]: questionTitle,
      },
      text: {
        ...question.text,
        [language]: questionText,
      },
    }

    try {
      await mutation.mutateAsync(updatedQuestion)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <Box sx={{ my: 2, mx: 4, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h6">{t('admin:question')}</Typography>
        <Typography ml={1}>{language}</Typography>
      </Box>
      <TextField
        fullWidth
        value={questionTitle}
        onChange={(event) => setQuestionTitle(event.target.value)}
      />

      <TextField
        multiline
        rows={20}
        fullWidth
        value={questionText}
        onChange={(event) => setQuestionText(event.target.value)}
      />
      <Button onClick={handleSave}>{t('admin:save')}</Button>
    </Box>
  )
}

const EditQuestion = ({
  language,
  question,
}: {
  language: keyof Locales
  question: Question
}) => (
  <Box mb={5} display="flex">
    <QuestionItem language={'fi' as keyof Locales} question={question} />
    <QuestionItem language={language} question={question} />
  </Box>
)

export default EditQuestion
