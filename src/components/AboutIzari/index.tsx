import Image from 'next/image'
import { styled } from '@mui/material/styles'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material'
import HomeIds from '@/constants/homeIds'

import { features, webBrowsers, environments, networks } from './constants'

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
  return (
    <Box
      id={HomeIds.IZARI_FILECOIN}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        gap: '70px',
      }}
    >
      <Box
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '50vw' }}
      >
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
          style={{ color: '#ACB4BF', marginBottom: '40px' }}
        >
          A comprehensive{' '}
          <Box
            component="span"
            sx={{
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
        <Typography variant="h2" color="secondary">
          Features
        </Typography>
        <List sx={{ maxWidth: 360 }}>
          {features.map(({ FeatureImage, text, id }) => (
            <ListItem id={id}>
              <ListItemAvatar>
                <RotateAvatar>
                  <FeatureImage color="primary" />
                </RotateAvatar>
              </ListItemAvatar>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '50vw',
        }}
      >
        <Typography
          variant="h4"
          color="secondary"
          style={{ marginBottom: '10px' }}
        >
          Networks
        </Typography>
        <Box style={{ display: 'flex', gap: '10px', marginBottom: '40px' }}>
          {networks.map(({ id, image, alt }) => (
            <Image alt={alt} src={image} id={id} width={200} height={100} />
          ))}
        </Box>
        <Typography
          variant="h4"
          color="secondary"
          style={{ alignSelf: 'end', marginBottom: '10px' }}
        >
          Environments
        </Typography>
        <Box
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '40px',
            alignSelf: 'end',
          }}
        >
          {environments.map(({ id, image, alt }) => (
            <JumpImage id={id}>
              <Image alt={alt} src={image} width={100} height={100} />
            </JumpImage>
          ))}
        </Box>
        <Typography
          variant="h4"
          color="secondary"
          style={{ marginBottom: '10px' }}
        >
          Web Browsers
        </Typography>
        <Box style={{ display: 'flex', gap: '10px' }}>
          {webBrowsers.map(({ id, image, alt }) => (
            <JumpImage id={id}>
              <Image alt={alt} src={image} width={100} height={100} />
            </JumpImage>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default AboutIzari
