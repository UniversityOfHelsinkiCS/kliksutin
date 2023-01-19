import React, { useRef, useState } from 'react'
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
  Divider,
} from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'

import toscalogoColor from '../../assets/toscalogo_color.svg'

const styles = {
  toolbar: {
    display: 'flex',
    width: '100%',
    '@media print': {
      display: 'none',
    },
    padding: '0.2rem 0 0.2rem 0',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    marginRight: 1,
    fontWeight: (theme: Theme) => theme.typography.fontWeightMedium,
    padding: '5px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    transition: 'background-color 0.1s',
    borderRadius: 3,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.22)',
    },
  },
  activeLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  linkContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.22)',
    },
  },
  languageMenuDivider: {
    margin: (theme: Theme) => theme.spacing(1, 0),
  },
  container: {
    display: 'flex',
  },
  item: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  activeItem: {
    color: (theme: Theme) => theme.palette.primary.main,
    fontWeight: (theme: Theme) => theme.typography.fontWeightMedium,
  },
}

const NavBar = () => {
  const { t, i18n } = useTranslation()
  const [openLanguageSelect, setOpenLanguageSelect] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const languages = ['fi', 'sv', 'en']
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en'
  )

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    setOpenLanguageSelect(false)
  }

  return (
    <AppBar
      elevation={0}
      position="relative"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 0,
        marginBottom: '1em',
      }}
    >
      <Container maxWidth={false}>
        <Toolbar sx={styles.toolbar} disableGutters>
          <Box display="inline-flex" alignItems="end" sx={styles.link}>
            <img src={toscalogoColor} alt="Toska" width="80" />
            <Box
              ml="1rem"
              pb="0.2rem"
              textTransform="uppercase"
              color="common.black"
              fontWeight={700}
              fontSize={18}
            >
              {t('appName')}
            </Box>
          </Box>
          <Box>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={
                openLanguageSelect ? 'composition-menu' : undefined
              }
              aria-expanded={openLanguageSelect ? 'true' : undefined}
              aria-haspopup="true"
              onClick={() => setOpenLanguageSelect(!openLanguageSelect)}
            >
              {language}
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
                              styles.item,
                              language === l && styles.activeItem,
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
      <Divider />
    </AppBar>
  )
}

export default NavBar
