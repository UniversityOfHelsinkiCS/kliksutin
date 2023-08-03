import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button } from '@mui/material'

import NewQuestionForm from './NewQuestionForm'
import { LanguageSelect, QuestionSelect } from '../Select'

const RenderEditQuestions = () => {
  const { t } = useTranslation()

  const [openNewQuestion, setOpenNewQuestion] = useState(false)

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
        <QuestionSelect />

        <LanguageSelect />

        <Button
          sx={{ position: 'absolute', right: 0, mr: 4, alignSelf: 'center' }}
          variant="contained"
          onClick={() => setOpenNewQuestion(!openNewQuestion)}
        >
          {t('admin:questionAddNew')}
        </Button>
      </Box>

      <Outlet />

      <NewQuestionForm open={openNewQuestion} setOpen={setOpenNewQuestion} />
    </Box>
  )
}

export default RenderEditQuestions
