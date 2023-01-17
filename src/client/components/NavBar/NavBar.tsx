import React, { forwardRef, useState, useRef } from 'react'
import { AppBar, Toolbar, Menu, MenuItem, Box, Container } from '@mui/material'
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
    fontWeight: (theme) => theme.typography.fontWeightMedium,
    padding: '5px 12px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
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
    margin: (theme) => theme.spacing(1, 0),
  },
  norppaFeedback: {
    background: (theme) => theme.palette.warning.main,
    color: 'black',
    padding: '6px 12px',
    borderRadius: 4,
    fontWeight: 'bold',
    alignItems: 'center',
    display: 'flex',
    '&:hover': {
      background: (theme) => theme.palette.warning.light,
    },
  },
  mailIcon: {
    marginLeft: 1,
  },
  container: {
    display: 'flex',
  },
  item: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  activeItem: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: (theme) => theme.typography.fontWeightMedium,
  },
}

type Ref = any

const LanguageMenu = forwardRef<
  Ref,
  { language: string; onLanguageChange: any }
>(({ language, onLanguageChange }, ref) => {
  const languages = ['fi', 'sv', 'en']
  return (
    <Box sx={styles.container} ref={ref}>
      {languages.map((l) => (
        <MenuItem
          key={l}
          sx={[styles.item, language === l && styles.activeItem]}
          onClick={() => onLanguageChange(l)}
        >
          {l.toUpperCase()}
        </MenuItem>
      ))}
    </Box>
  )
})

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuButtonRef = useRef()

  return (
    <>
      <Menu
        id="navBarMenu"
        anchorEl={menuButtonRef.current}
        keepMounted
        open={menuOpen}
        onClose={() => setMenuOpen(!menuOpen)}
      >
        <LanguageMenu
          language="fi"
          onLanguageChange={() => {
            console.log('changed')
          }}
        />
      </Menu>
      <AppBar
        elevation={0}
        position="relative"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: (theme) => theme.palette.primary.dark,
          boxShadow: (theme) =>
            `0px 0px 10px 1px ${theme.palette.primary.main}`,
          borderRadius: 0,
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
                fontWeight={700}
                fontSize={18}
              >
                Kliksutin
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar
