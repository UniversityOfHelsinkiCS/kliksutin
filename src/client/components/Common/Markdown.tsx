import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, Typography } from '@mui/material'

const GutterTypography = ({ ...props }: any) => {
  console.log(props)
  return <Typography {...props} />
}

const H1 = ({ ...props }: any) => (
  <GutterTypography variant="h4" component="h1" {...props} />
)

const H2 = ({ ...props }: any) => (
  <GutterTypography variant="h5" component="h2" {...props} />
)

const H3 = ({ ...props }: any) => (
  <GutterTypography variant="h6" component="h3" {...props} />
)

const H4 = ({ ...props }: any) => (
  <GutterTypography variant="body1" component="h4" {...props} />
)

const A = ({ ...props }: any) => <Link color="inherit" {...props} />

const defaultComponents = {
  p: GutterTypography,
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
}

const Markdown = ({ ...props }: any) => (
  <ReactMarkdown
    components={{ ...defaultComponents } as any}
    linkTarget="_blank"
    {...props}
  />
)

export default Markdown
