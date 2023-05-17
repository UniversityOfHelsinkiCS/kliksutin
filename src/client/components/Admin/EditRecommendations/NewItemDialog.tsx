import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

const NewItemDialog = ({ open, title, content, onClose, children }: any) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
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
