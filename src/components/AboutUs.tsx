import { Box, Typography } from '@mui/material'
import HomeIds from '@/constants/homeIds'

function AboutUs() {
  return (
    <Box id={HomeIds.ABOUT_US} style={{ height: '600px' }}>
      <Typography>About Us</Typography>
    </Box>
  )
}

export default AboutUs
