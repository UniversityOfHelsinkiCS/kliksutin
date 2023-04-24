import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import styles from '../styles'

import toskaColor from '../assets/toscalogo_color.svg'
import Markdown from './Common/Markdown'

const supportEmail = 'opetusteknologia@helsinki.fi'

const Footer = () => {
  const { t } = useTranslation()

  const { footerStyles } = styles

  return (
    <Box
      component="footer"
      sx={(theme) => ({
        backgroundColor: theme.palette.toskaDark.main,
        color: theme.palette.toskaDark.contrastText,
      })}
    >
      <Box sx={footerStyles.supportBox}>
        <Box>
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
          <Link
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            <img
              alt="Creative Commons license"
              src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            />
          </Link>
          <br />
          {t('footer:licenseText')}
          <Link
            sx={{ ml: 1 }}
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            {t('footer:licenseLinkText')}
          </Link>
        </Box>

        <Box style={{ overflow: 'hidden' }}>
          <Markdown>
            [Kerrothan mielipiteesi Curresta lyhyen palautelomakkeen
            muodossa.](https://forms.office.com/e/TWvNdLb48z)
          </Markdown>
        </Box>

        <Box sx={footerStyles.imageBox}>
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
