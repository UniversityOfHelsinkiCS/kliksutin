import { Theme } from '@mui/material/styles'

const navStyles = {
  toolbar: {
    display: 'flex',
    width: '100%',
    '@media print': {
      display: 'none',
    },
    justifyContent: 'space-between',
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

export default { navStyles }
