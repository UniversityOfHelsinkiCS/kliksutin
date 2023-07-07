import React, { BaseSyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

const NewItemDialog = ({
  open,
  title,
  content,
  onSubmit,
  onClose,
  children,
}: {
  open: boolean
  title: string
  content: string
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
  onClose: () => void
  children: React.ReactNode
}) => {
  const { t } = useTranslation()

  return (
    <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 4 }}>{content}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onSubmit}>
          {t('admin:save')}
        </Button>
        <Button variant="outlined" onClick={onClose}>
          {t('admin:cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NewItemDialog
