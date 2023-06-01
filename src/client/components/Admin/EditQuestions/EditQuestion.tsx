import React, { useState, useEffect } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import {
  useDeleteQuestionMutation,
  useEditQuestionMutation,
} from '../../../hooks/useQuestionMutation'

import DeleteDialog from '../DeleteDialog'

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
  onDelete,
}: {
  language: keyof Locales
  question: Question
  onDelete: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { t } = useTranslation()
  const mutation = useDeleteQuestionMutation(question.id)
  const [openAlert, setOpenAlert] = useState(false)

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync()
      enqueueSnackbar(t('admin:deleteSuccess'), { variant: 'success' })
      setOpenAlert(false)
      onDelete('') // callback to reset the selected question ID
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <>
      <Button
        sx={{
          ml: 4,
          alignSelf: 'center',
        }}
        variant="outlined"
        color="error"
        onClick={() => setOpenAlert(!openAlert)}
      >
        {t('admin:questionRemove')}
      </Button>
      <DeleteDialog
        open={openAlert}
        title={t('admin:questionRemoveQuestionInfo')}
        content={t('admin:questionRemoveQuestionContent')}
        setOpen={setOpenAlert}
        onSubmit={handleDelete}
      />
      <Box mb={5} display="flex">
        <QuestionItem language={'fi' as keyof Locales} question={question} />
        <QuestionItem language={language} question={question} />
      </Box>
    </>
  )
}

export default EditQuestion
