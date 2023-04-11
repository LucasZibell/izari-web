import Image from 'next/image'
import { useState } from 'react'
import { List, ListItem, Box, Typography } from '@mui/material'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'
import HomeIds from '@/constants/homeIds'
import GithubLogo from '@/assets/github-big-logo.png'
import NpmLogo from '@/assets/npm-logo.png'
import { specificFeatures, codeExample } from './constants'

function GettingStarted() {
  const [code, setCode] = useState(codeExample)
  return (
    <Box
      id={HomeIds.GETTING_STARTED}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'start',
        padding: '4rem 5rem',
      }}
    >
      <Typography
        variant="h2"
        style={{ color: 'white', fontWeight: 'bold', marginBottom: '40px' }}
      >
        How to start?
      </Typography>
      <Typography variant="h4" style={{ color: 'white', marginBottom: '20px' }}>
        Install ⚙️
      </Typography>
      <Typography variant="h5" style={{ color: 'white', marginBottom: '10px' }}>
        Using Yarn
      </Typography>
      <Typography
        variant="h6"
        style={{
          color: 'black',
          backgroundColor: '#fafafa',
          borderRadius: '5px',
          padding: '5px 10px',
          marginBottom: '10px',
        }}
      >
        yarn add @zondax/izari-filecoin
      </Typography>
      <Typography variant="h5" style={{ color: 'white', marginBottom: '10px' }}>
        Using NPM
      </Typography>
      <Typography
        variant="h6"
        style={{
          backgroundColor: '#fafafa',
          borderRadius: '5px',
          color: 'black',
          padding: '5px 10px',
          marginBottom: '40px',
        }}
      >
        npm install --save @zondax/izari-filecoin
      </Typography>
      <Typography variant="h4" style={{ color: 'white', marginBottom: '20px' }}>
        Use 🚀
      </Typography>
      <Typography variant="h5" style={{ color: 'white', marginBottom: '10px' }}>
        ESM modules
      </Typography>
      <Typography
        variant="h6"
        style={{
          backgroundColor: '#fafafa',
          borderRadius: '5px',
          color: 'black',
          padding: '5px 10px',
          marginBottom: '20px',
        }}
      >
        {`import { Wallet, Transaction, Account } from "@zondax/izari-filecoin"`}
      </Typography>
      <Typography variant="h5" style={{ color: 'white', marginBottom: '10px' }}>
        CommonJS modules
      </Typography>
      <Typography
        variant="h6"
        style={{
          backgroundColor: '#fafafa',
          borderRadius: '5px',
          color: 'black',
          padding: '5px 10px',
          marginBottom: '40px',
        }}
      >
        {`const { Wallet, Transaction, Account } = require("@zondax/izari-filecoin")"`}
      </Typography>
      <Typography variant="h4" style={{ color: 'white' }}>
        Specific features 🔬
      </Typography>
      <List style={{ marginBottom: '20px' }}>
        {specificFeatures.map((feat) => (
          <ListItem id={feat}>
            <Typography
              variant="h6"
              style={{
                color: 'white',
              }}
            >
              • {feat}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="h4" style={{ color: 'white', marginBottom: '40px' }}>
        Examples 🛠️
      </Typography>
      <Editor
        value={code}
        onValueChange={(newCode) => setCode(newCode)}
        highlight={(newCode) => highlight(newCode, languages.js, 'en')}
        padding={10}
        style={{
          borderRadius: '5px',
          backgroundColor: '#fafafa',
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
          marginBottom: '40px',
          maxWidth: '80vw',
        }}
      />
      <Typography variant="h4" style={{ color: 'white', marginBottom: '40px' }}>
        More Info 📚
      </Typography>
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
          marginBottom: '40px',
        }}
      >
        <a
          href="https://github.com/zondax/izari-filecoin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={GithubLogo}
            alt="Github"
            style={{
              backgroundColor: 'white',
              borderRadius: '40px',
              width: '100%',
              height: 'auto',
              maxWidth: '300px',
            }}
          />
        </a>
        <a
          href="https://www.npmjs.com/package/@zondax/izari-filecoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={NpmLogo}
            alt="Npm"
            style={{ width: '100%', height: 'auto', maxWidth: '200px' }}
          />
        </a>
      </Box>
    </Box>
  )
}

export default GettingStarted
