import Image from 'next/image'
import { styled } from '@mui/material/styles'
import { Box, Typography, TypographyProps } from '@mui/material'
import HomeIds from '@/constants/homeIds'
import FileCoinLogo from '@/assets/filecoin-logo.png'

interface TextLinkProps extends TypographyProps {
  primary?: string
}

const TextLink = styled(Typography)<TextLinkProps>(({ theme, primary }) => ({
  backgroundColor: primary ? theme.palette.primary.main : 'white',
  fontWeight: 500,
  fontSize: '24px',
  color: primary ? 'white' : theme.palette.primary.main,
  padding: '10px 20px',
  borderRadius: '40px',
  minWidth: '182px',
  boxShadow: '-10px 10px 0px 0px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.3s ease-out',
  '&:hover': {
    boxShadow: '-15px 15px 0px 0px rgba(0, 0, 0, 0.3)',
  },
}))

function AboutFileCoin() {
  return (
    <Box
      id={HomeIds.ABOUT_FILECOIN}
      style={{
        backgroundColor: 'rgb(32, 32, 40)',
        width: '100%',
        display: 'flex',
        gap: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem',
      }}
    >
      <Image
        style={{ width: '100%', height: 'auto', maxWidth: '100px' }}
        alt="filecoin"
        src={FileCoinLogo}
      />
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h2" style={{ color: 'white', fontWeight: 'bold' }}>
          What is Filecoin?
        </Typography>
        <Typography
          variant="h6"
          paragraph
          color="secondary"
          style={{ marginBottom: '20px' }}
        >
          Filecoin is a decentralized storage network designed to store
          humanity&apos;s most important information.
        </Typography>
        <Box style={{ display: 'flex', gap: '30px' }}>
          <a
            href="https://filecoin.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextLink primary="true">Filecoin.io</TextLink>
          </a>
          <a
            href="https://fvm.filecoin.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextLink>Filecoin FVM</TextLink>
          </a>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutFileCoin
