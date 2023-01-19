const cardStyles = {
  card: {
    maxWidth: 640,
    mx: 'auto',
    mb: 2,
    transition: '0.3s',
    boxShadow: '0 8px 20px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  content: {
    mt: 4,
    mb: 2,
    px: 2,
    textAlign: 'left',
  },
  question: {
    my: 2,
    fontWeight: '200',
  },
  recommendation: {
    mt: 2,
    pb: 2,
    fontWeight: '500',
  },
  heading: {
    fontWeight: '400',
  },
}

export default { cardStyles }
