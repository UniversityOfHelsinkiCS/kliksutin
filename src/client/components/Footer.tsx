import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'

import toskaColor from '../assets/toscalogo_color.svg'

const supportEmail = 'opetusteknologia@helsinki.fi'

const Footer = () => {
  useTranslation()

  return (
    <Box
      component="footer"
      sx={(theme) => ({
        backgroundColor: theme.palette.toskaDark.main,
        color: theme.palette.toskaDark.contrastText,
      })}
    >
      <Box
        py="2rem"
        px="3rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>
          <Trans
            i18nKey="footer:contactSupport"
            values={{ supportEmail }}
            components={{
              mailTo: (
                <Link
                  href={`mailto:${supportEmail}`}
                  underline="hover"
                  color="toskaPrimary.main"
                />
              ),
            }}
          />
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          rowGap="1rem"
        >
          <Link
            href="https://toska.dev"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            <img src={toskaColor} alt="Toska" width="70" />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
