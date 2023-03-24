import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { FORM_DATA_KEY } from '../../../config'
import styles from '../../styles'

const ResetForm = () => {
  const { t } = useTranslation()
  const { formStyles } = styles

  const resetForm = () => {
    sessionStorage.removeItem(FORM_DATA_KEY)
    window.location.reload()
  }

  return (
    <Button
      sx={formStyles.stackButton}
      type="button"
      data-cy="reset-form-button"
      onClick={resetForm}
    >
      {t('reset')}
    </Button>
  )
}

export default ResetForm
