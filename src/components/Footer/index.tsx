import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'
import ZondaxLogo from '@/assets/zondaxLogo.svg'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

import { legalItems, companyItems, solutionItems } from './constants'

function Footer() {
  return (
    <Box style={{ padding: '4rem 5rem', width: '100%' }}>
      <Grid container alignItems="start" justifyContent="space-around">
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Image
                src={ZondaxLogo}
                alt="Zondax Logo"
                width={120}
                height={30}
              />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="secondary">
                General
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                component="a"
                href="mailto:hello@zondax.ch"
                style={{ color: 'white' }}
              >
                hello@zondax.ch
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="secondary">
                Ledger Apps
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                component="a"
                href="mailto:ledger@zondax.ch"
                style={{ color: 'white' }}
              >
                ledger@zondax.ch
              </Typography>
            </Grid>
            <Grid item>
              <Box style={{ display: 'flex', gap: '20px' }}>
                <GitHubIcon color="primary" fontSize="large" />
                <LinkedInIcon color="primary" fontSize="large" />
                <TwitterIcon color="primary" fontSize="large" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography
                variant="h5"
                style={{ color: 'white', fontWeight: 600 }}
              >
                Solutions
              </Typography>
            </Grid>
            {solutionItems.map((solutionItem) => (
              <Grid item key={solutionItem}>
                <Typography variant="body1" color="secondary">
                  {solutionItem}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography
                variant="h5"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                Company
              </Typography>
            </Grid>
            {companyItems.map((companyItem) => (
              <Grid item key={companyItem}>
                <Typography variant="body1" color="secondary">
                  {companyItem}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography
                variant="h5"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                Legal
              </Typography>
            </Grid>
            {legalItems.map((legalItem) => (
              <Grid item key={legalItem}>
                <Typography variant="body1" color="secondary">
                  {legalItem}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
