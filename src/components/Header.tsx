import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import ZondaxLogo from '@/assets/zondaxLogo.svg'

function Header() {
  return (
    <Box
      style={{
        boxShadow: 'rgb(0 0 0 / 69%) 0px 0px 10px 4px',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <a href="https://zondax.ch/" target="_blank" rel="noopener noreferrer">
        <Image src={ZondaxLogo} alt="Zondax Logo" width={120} height={30} />
      </a>
      <Typography>Izari Filecoin</Typography>
      <Typography>What is Filecoin?</Typography>
      <Typography>Getting Started</Typography>
      <Typography>About Us</Typography>
    </Box>
  )
}

export default Header
