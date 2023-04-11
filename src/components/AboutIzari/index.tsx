import Image from 'next/image'
import { styled } from '@mui/material/styles'
import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material'
import HomeIds from '@/constants/homeIds'

import {
  featuresFirstColumn,
  featuresSecondColumn,
  webBrowsers,
  environments,
  networks,
} from './constants'

const RotateAvatar = styled(Avatar)(() => ({
  backgroundColor: 'white',
  '&:hover': {
    animation: 'shake 0.5s',
  },
}))

const JumpImage = styled(Box)(() => ({
  display: 'inline-block',
  transition: 'transform 0.3s ease-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}))

function AboutIzari() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      id={HomeIds.IZARI_FILECOIN}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isSmallScreen ? '30px' : '70px',
        padding: '4rem 5rem',
      }}
    >
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h1"
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Izari Filecoin
        </Typography>
        <Typography
          variant="h6"
          paragraph
          color="secondary"
          style={{ marginBottom: '40px' }}
        >
          A comprehensive{' '}
          <Box
            component="span"
            sx={{
              borderRadius: '20px',
              backgroundColor: 'primary.main',
              color: 'white',
              display: 'inline',
              padding: '4px 2px',
            }}
          >
            set of tools designed to interact with Blockchains.
          </Box>{' '}
          With its focus on compatibility, it provides developers with a
          versatile and flexible solution that can be used across a range of
          environments.
        </Typography>
        <Typography
          variant="h2"
          color="primary"
          style={{ marginBottom: '20px' }}
        >
          Features
        </Typography>
        <Box style={{ display: 'flex', gap: '60px' }}>
          <List>
            {featuresFirstColumn.map(({ FeatureImage, text, id }) => (
              <ListItem id={id}>
                <ListItemAvatar>
                  <RotateAvatar>
                    <FeatureImage color="primary" />
                  </RotateAvatar>
                </ListItemAvatar>
                <ListItemText primary={text} style={{ color: 'white' }} />
              </ListItem>
            ))}
          </List>
          <List>
            {featuresSecondColumn.map(({ FeatureImage, text, id }) => (
              <ListItem id={id}>
                <ListItemAvatar>
                  <RotateAvatar>
                    <FeatureImage color="primary" />
                  </RotateAvatar>
                </ListItemAvatar>
                <ListItemText primary={text} style={{ color: 'white' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Typography
          variant="h3"
          color="primary"
          style={{ marginBottom: '10px' }}
        >
          Networks
        </Typography>
        <Box
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {networks.map(({ id, image, alt }) => (
            <JumpImage id={id}>
              <Image
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '75px',
                }}
                alt={alt}
                src={image}
              />
            </JumpImage>
          ))}
        </Box>
        <Typography
          variant="h3"
          color="primary"
          style={{ marginBottom: '10px' }}
        >
          Environments
        </Typography>
        <Box
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '40px',
            // alignSelf: 'end',
            alignItems: 'center',
          }}
        >
          {environments.map(({ id, image, alt }) => (
            <JumpImage id={id}>
              <Image
                alt={alt}
                src={image}
                style={{ width: '100%', height: 'auto', maxWidth: '75px' }}
              />
            </JumpImage>
          ))}
        </Box>
        <Typography
          variant="h3"
          color="primary"
          style={{ marginBottom: '10px' }}
        >
          Web Browsers
        </Typography>
        <Box style={{ display: 'flex', gap: '10px' }}>
          {webBrowsers.map(({ id, image, alt }) => (
            <JumpImage id={id}>
              <Image
                alt={alt}
                src={image}
                style={{ width: '100%', height: 'auto', maxWidth: '75px' }}
              />
            </JumpImage>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default AboutIzari
