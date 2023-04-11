import Image from 'next/image'
import { styled } from '@mui/material/styles'
import { Box, Typography, TypographyProps } from '@mui/material'
import HomeIds from '@/constants/homeIds'
import FileCoinLogo from '@/assets/filecoin-logo.png'

interface TextLinkProps extends TypographyProps {
  primary?: boolean
}

const TextLink = styled(Typography)<TextLinkProps>(({ theme, primary }) => ({
  backgroundColor: primary ? theme.palette.primary.main : 'white',
  fontWeight: 500,
  fontSize: '24px',
  color: primary ? 'white' : theme.palette.primary.main,
  padding: '10px 20px',
  borderRadius: '40px',
}))

function AboutFileCoin() {
  return (
    <Box
      id={HomeIds.ABOUT_FILECOIN}
      style={{ display: 'flex', gap: '50px', padding: '70px 20px' }}
    >
      <Box style={{ backgroundColor: 'white', borderRadius: '300px' }}>
        <Image alt="filecoin" src={FileCoinLogo} width={700} height={308} />
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h2" style={{ fontWeight: 'bold' }}>
          What is Filecoin?
        </Typography>
        <Typography
          variant="h6"
          paragraph
          style={{ color: '#ACB4BF', marginBottom: '20px' }}
        >
          Filecoin is a decentralized storage network designed to store
          humanity&apos;s most important information.
        </Typography>
        <Box style={{ display: 'flex', gap: '80px' }}>
          <a
            href="https://filecoin.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextLink primary>Filecoin.io</TextLink>
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
