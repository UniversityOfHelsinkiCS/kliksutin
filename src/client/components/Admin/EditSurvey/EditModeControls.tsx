import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Collapse, Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface EditModeControlProps {
  questionName: string | undefined
  isOpen: boolean
  onClose: () => void
}

const EditModeControls = ({
  questionName,
  isOpen,
  onClose,
}: EditModeControlProps) => {
  const { t } = useTranslation()
  if (!questionName || !isOpen) return null

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        position: 'fixed',
        bottom: '1rem',
      }}
    >
      <Collapse in={isOpen}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {t('admin:editModeControlContent', { questionName })}
        </Alert>
      </Collapse>
    </Box>
  )
}

export default EditModeControls
