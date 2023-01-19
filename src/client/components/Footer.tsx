import React from 'react'
import { Box, Divider, Typography, Link, Container } from '@mui/material'
import toscalogoColor from '../assets/toscalogo_color.svg'

const supportEmail = 'grp-toska@helsinki.fi'

const Footer = () => (
  <Box marginTop="auto">
    <Divider />
    <Container component="footer" maxWidth="xl">
      <Box
        mb={1}
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <Typography>
            Ota yhteyttä tukeen:{' '}
            <Link href={`mailto:${supportEmail}`} underline="hover">
              {supportEmail}
            </Link>
          </Typography>
        </div>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          rowGap="1rem"
        >
          <Link
            href="https://toska.dev"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            <img src={toscalogoColor} alt="Toska" width="80" />
          </Link>
        </Box>
      </Box>
    </Container>
  </Box>
)

export default Footer
