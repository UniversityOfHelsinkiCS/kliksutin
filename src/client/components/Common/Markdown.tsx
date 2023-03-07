import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { Link, Typography } from '@mui/material'

const GutterTypography = ({ ...props }: any) => <Typography {...props} />

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

const Markdown = ({ children, ...props }: any) => {
  // https://stackoverflow.com/questions/69026492/adding-multiple-line-break-in-react-markdown
  const content = children.replace(/\n/gi, '&nbsp; \n')

  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{ ...defaultComponents } as any}
      linkTarget="_blank"
      {...props}
    >
      {content}
    </ReactMarkdown>
  )
}

//

export default Markdown
