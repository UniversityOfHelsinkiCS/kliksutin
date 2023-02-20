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
  Typography,
} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { useTranslation } from 'react-i18next'

import toscalogoColor from '../../assets/toscalogo_color.svg'
import styles from './styles'

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

  const classes = styles.navStyles

  return (
    <AppBar
      elevation={0}
      position="relative"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 0,
        borderBottom: '1px solid black',
        py: '1rem',
      }}
    >
      <Container maxWidth={false}>
        <Toolbar sx={classes.toolbar} disableGutters>
          <Box display="inline-flex" alignItems="end" sx={classes.link}>
            <img src={toscalogoColor} alt="Toska" width="80" />
            <Box ml="2rem">
              <Typography
                textTransform="uppercase"
                color="black"
                fontWeight={700}
                fontSize={18}
                sx={{ userSelect: 'none' }}
              >
                {t('appName')}
              </Typography>
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
              <LanguageIcon sx={{ mr: 2 }} /> {language}
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
                              classes.item,
                              language === l && classes.activeItem,
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
