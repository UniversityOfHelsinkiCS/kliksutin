import React, { useState } from 'react'
import { IconButton, Collapse } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Markdown from './Markdown'

const ShowMore = ({ text }: { text: string }) => {
  const [expand, setExpand] = useState(false)

  return (
    <>
      <IconButton onClick={() => setExpand(!expand)}>
        <HelpOutlineIcon />
        {!expand ? <ExpandMore /> : <ExpandLess />}
      </IconButton>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <Markdown>{text}</Markdown>
      </Collapse>
    </>
  )
}

export default ShowMore
