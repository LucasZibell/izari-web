import { Box, Typography } from '@mui/material'
import HomeIds from '@/constants/homeIds'

function AboutUs() {
  return (
    <Box
      id={HomeIds.ABOUT_US}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 100px',
      }}
    >
      <Typography variant="h2" style={{ fontWeight: 'bold' }}>
        What we do
      </Typography>
      <Typography
        variant="h6"
        paragraph
        style={{ color: '#ACB4BF', marginBottom: '40px', textAlign: 'center' }}
      >
        At Zondax, we are dedicated to{' '}
        <Box
          component="span"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            display: 'inline',
            padding: '4px 2px',
          }}
        >
          shaping the future of the blockchain
        </Box>{' '}
        industry through innovative technology solutions and unparalleled
        expertise. Our mission is to provide exceptional products and services
        that empower businesses and individuals to{' '}
        <Box
          component="span"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            display: 'inline',
            padding: '4px 2px',
          }}
        >
          harness the full potential of blockchain and decentralized systems.
        </Box>
      </Typography>
      <Typography variant="h2" style={{ fontWeight: 'bold' }}>
        Our Mission
      </Typography>
      <Typography
        variant="h6"
        paragraph
        style={{ color: '#ACB4BF', marginBottom: '40px', textAlign: 'center' }}
      >
        We are aiming to contribute into{' '}
        <Box
          component="span"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            display: 'inline',
            padding: '4px 2px',
          }}
        >
          building safe and trustable blockchain
        </Box>{' '}
        industry by providing the best in class security solutions and be a
        constant integrator of the most innovative technologies. With our
        solutions and products we want to make the blockchain ecosystem flourish
        and bring value to the people.
      </Typography>
    </Box>
  )
}

export default AboutUs
