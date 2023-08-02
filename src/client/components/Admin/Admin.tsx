import React from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

import { Alert, Box, Tab, Tabs } from '@mui/material'
import useLoggedInUser from '../../hooks/useLoggedInUser'

import styles from '../../styles'

const Admin = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { user, isLoading } = useLoggedInUser()

  const { common } = styles

  if (isLoading) return null

  if (!user || !user.isAdmin) return <Navigate to="/" />

  const pathParts = location.pathname.split('/').filter(Boolean)

  const tab = pathParts.length < 2 ? 'admin' : pathParts[1]

  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={tab}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab
          component={Link}
          to="."
          label={t('admin:indexTab')}
          value="admin"
        />
        <Tab
          component={Link}
          to="./edit-dimensions"
          label={t('admin:dimensionTab')}
          value="edit-dimensions"
        />
        <Tab
          component={Link}
          to="./edit-questions"
          label={t('admin:questionTab')}
          value="edit-questions"
        />
        <Tab
          component={Link}
          to="./edit-results"
          label={t('admin:resultTab')}
          value="edit-results"
        />
        <Tab
          component={Link}
          to="./edit-recommendations"
          label={t('admin:recommendationTab')}
          value="edit-recommendations"
        />
      </Tabs>
      <Alert sx={{ ...common.alertStyle, m: 4 }} severity="info">
        <Trans i18nKey="admin:markdown">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://commonmark.org/help/"
          >
            Markdown
          </a>
        </Trans>
      </Alert>
      <Outlet />
    </Box>
  )
}
export default Admin
