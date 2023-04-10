import { Box, Typography } from '@mui/material'
import HomeIds from '@/constants/homeIds'

function GettingStarted() {
  return (
    <Box id={HomeIds.GETTING_STARTED} style={{ height: '600px' }}>
      <Typography>GettingStarted</Typography>
    </Box>
  )
}

export default GettingStarted
