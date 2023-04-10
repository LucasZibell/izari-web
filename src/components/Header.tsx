import { MouseEvent } from 'react'
import Image from 'next/image'
import { Box, Link, Typography } from '@mui/material'
import ZondaxLogo from '@/assets/zondaxLogo.svg'
import HomeIds from '@/constants/homeIds'

const { IZARI_FILECOIN, ABOUT_FILECOIN, GETTING_STARTED, ABOUT_US } = HomeIds

function Header() {
  const scrollToTarget = (
    evt: MouseEvent<HTMLAnchorElement | HTMLSpanElement>,
    id: string
  ) => {
    evt.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

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
      <Link
        href={`#${IZARI_FILECOIN}`}
        onClick={(e) => scrollToTarget(e, IZARI_FILECOIN)}
        style={{ textDecoration: 'none' }}
      >
        <Typography style={{ color: 'white' }}>Izari Filecoin</Typography>
      </Link>
      <Link
        href={`#${ABOUT_FILECOIN}`}
        onClick={(e) => scrollToTarget(e, ABOUT_FILECOIN)}
        style={{ textDecoration: 'none' }}
      >
        <Typography style={{ color: 'white' }}>What is Filecoin?</Typography>
      </Link>
      <Link
        href={`#${GETTING_STARTED}`}
        onClick={(e) => scrollToTarget(e, GETTING_STARTED)}
        style={{ textDecoration: 'none' }}
      >
        <Typography style={{ color: 'white' }}>Getting Started</Typography>
      </Link>
      <Link
        href={`#${ABOUT_US}`}
        onClick={(e) => scrollToTarget(e, ABOUT_US)}
        style={{ textDecoration: 'none' }}
      >
        <Typography style={{ color: 'white' }}>About Us</Typography>
      </Link>
    </Box>
  )
}

export default Header
