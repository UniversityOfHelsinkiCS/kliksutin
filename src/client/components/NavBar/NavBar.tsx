import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  MenuItem,
  Box,
  Container,
  MenuList,
  Button,
  Paper,
  ClickAwayListener,
  Grow,
  Popper,
  Typography,
  Link as ExternalLink,
} from '@mui/material'
import {
  Language,
  AdminPanelSettingsOutlined,
  LoginOutlined,
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import hyLogo from '../../assets/hy_logo.svg'
import styles from '../../styles'
import useLoggedInUser from '../../hooks/useLoggedInUser'
import { FULL_URL } from '../../../config'

const NavBar = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const { user, isLoading } = useLoggedInUser()
  const [openLanguageSelect, setOpenLanguageSelect] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (user?.language) i18n.changeLanguage(user.language)
  }, [user, i18n])

  const { language } = i18n
  const languages = ['fi', 'sv', 'en']

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    setOpenLanguageSelect(false)
  }

  const { navStyles } = styles

  if (isLoading) return null

  return (
    <AppBar elevation={0} position="relative" sx={navStyles.appbar}>
      <Container maxWidth={false}>
        <Toolbar sx={navStyles.toolbar} disableGutters>
          <Box sx={navStyles.navBox}>
            <img src={hyLogo} alt="University of Helsinki" width="40" />
            <Box ml="2rem">
              <Typography sx={navStyles.appName}>{t('appName')}</Typography>
            </Box>
          </Box>
          <Box>
            {location.pathname !== '/public' && user?.isAdmin && (
              <Link to="/admin" style={{ textDecoration: 'none' }}>
                <Button>
                  <AdminPanelSettingsOutlined sx={navStyles.icon} />{' '}
                  {t('admin')}
                </Button>
              </Link>
            )}
            {location.pathname === '/public' && (
              <ExternalLink href={FULL_URL} style={{ textDecoration: 'none' }}>
                <Button>
                  <LoginOutlined sx={navStyles.icon} />
                  <Typography variant="body2" sx={navStyles.itemText}>
                    {t('login')}
                  </Typography>
                </Button>
              </ExternalLink>
            )}
            <Button
              ref={anchorRef}
              id="composition-button"
              data-cy="language-select"
              aria-controls={
                openLanguageSelect ? 'composition-menu' : undefined
              }
              aria-expanded={openLanguageSelect ? 'true' : undefined}
              aria-haspopup="true"
              onClick={() => setOpenLanguageSelect(!openLanguageSelect)}
            >
              <Language sx={navStyles.language} /> {language}
            </Button>
            <Popper
              open={openLanguageSelect}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener
                      onClickAway={() =>
                        setOpenLanguageSelect(!openLanguageSelect)
                      }
                    >
                      <MenuList
                        autoFocusItem={openLanguageSelect}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                      >
                        {languages.map((l) => (
                          <MenuItem
                            key={l}
                            sx={[
                              navStyles.item,
                              language === l && navStyles.activeItem,
                            ]}
                            onClick={() => {
                              handleLanguageChange(l)
                            }}
                          >
                            {l.toUpperCase()}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
