import { Box, Typography } from '@mui/material'
import HomeIds from '@/constants/homeIds'
import { styled } from '@mui/material/styles'

const WorkWithUs = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '30px',
  color: 'white',
  padding: '20px 30px',
  borderRadius: '50px',
  '&:hover': {
    animation: 'littleShake 0.3s',
  },
}))

function AboutUs() {
  return (
    <Box
      id={HomeIds.ABOUT_US}
      style={{
        backgroundColor: 'rgb(32, 32, 40)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5rem 5rem',
      }}
    >
      <Typography variant="h2" style={{ color: 'white', fontWeight: 'bold' }}>
        What we do
      </Typography>
      <Typography
        variant="h6"
        paragraph
        color="secondary"
        style={{ marginBottom: '80px', textAlign: 'center' }}
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
      <Typography variant="h2" style={{ color: 'white', fontWeight: 'bold' }}>
        Our Mission
      </Typography>
      <Typography
        variant="h6"
        paragraph
        color="secondary"
        style={{ textAlign: 'center', marginBottom: '80px' }}
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
      <a
        href="https://zondax.ch/careers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WorkWithUs>Join Zondax Team</WorkWithUs>
      </a>
    </Box>
  )
}

export default AboutUs
