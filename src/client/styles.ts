const cardStyles = {
  card: {
    m: 2,
    transition: '0.3s',
    textAlign: 'left',
  },
  helloBox: {
    m: 2,
    maxWidth: 1280,
  },
  outerBox: {
    m: 2,
    maxWidth: 1280,
    border: 1,
    borderColor: 'grey.300',
  },
  gridBox: {
    px: 3,
    py: 2,
  },
  gridContainer: {
    spacing: 1,
  },
  questionsContainer: {
    my: 8,
    borderLeft: 1,
    borderColor: 'grey.300',
  },
  content: {
    mt: 2,
    mb: 2,
    pl: 2,
    textAlign: 'left',
  },
  question: {
    my: 2,
    fontWeight: '200',
  },
  heading: {
    fontWeight: '200',
    pb: 1,
  },
}

const formStyles = {
  formControl: { width: '100%' },
  choiceBox: { display: 'flex', flexWrap: 'wrap', gap: 0.3 },
}

const common = {
  alertStyle: { width: 600 },
}

export default { cardStyles, formStyles, common }
