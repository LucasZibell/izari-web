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
      <Typography
        variant="h3"
        style={{ fontWeight: 'bold', color: 'white', marginBottom: '30px' }}
      >
        Install ⚙️
      </Typography>
      <Typography variant="h5" style={{ color: 'white', marginBottom: '10px' }}>
        Using Yarn
      </Typography>
      <Typography
        variant="h6"
        style={{
          color: 'white',
          backgroundColor: 'black',
          borderRadius: '5px',
          padding: '5px 10px',
          marginBottom: '40px',
          boxShadow: '5px 7px 5px 0px rgb(15, 98, 254)',
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
          color: 'white',
          backgroundColor: 'black',
          borderRadius: '5px',
          padding: '5px 10px',
          marginBottom: '60px',
          boxShadow: '5px 7px 5px 0px rgb(15, 98, 254)',
        }}
      >
        npm install --save @zondax/izari-filecoin
      </Typography>
      <Typography
        variant="h3"
        style={{ fontWeight: 'bold', color: 'white', marginBottom: '30px' }}
      >
        Use 🚀
      </Typography>
      <Typography variant="h5" style={{ color: 'white', marginBottom: '10px' }}>
        ESM modules
      </Typography>
      <Typography
        variant="h6"
        style={{
          color: 'white',
          backgroundColor: 'black',
          borderRadius: '5px',
          padding: '5px 10px',
          marginBottom: '40px',
          boxShadow: '5px 7px 5px 0px rgb(15, 98, 254)',
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
          color: 'white',
          backgroundColor: 'black',
          borderRadius: '5px',
          padding: '5px 10px',
          marginBottom: '60px',
          boxShadow: '5px 7px 5px 0px rgb(15, 98, 254)',
        }}
      >
        {`const { Wallet, Transaction, Account } = require("@zondax/izari-filecoin")`}
      </Typography>
      <Typography
        variant="h3"
        style={{ fontWeight: 'bold', color: 'white', marginBottom: '10px' }}
      >
        Specific features 🔬
      </Typography>
      <List style={{ marginBottom: '30px' }}>
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
      <Typography
        variant="h4"
        style={{ fontWeight: 'bold', color: 'white', marginBottom: '40px' }}
      >
        Examples 🛠️
      </Typography>
      <Editor
        value={code}
        onValueChange={(newCode) => setCode(newCode)}
        highlight={(newCode) =>
          highlight(newCode, languages.javascript, 'javascript')
        }
        padding={10}
        style={{
          borderRadius: '10px',
          backgroundColor: '#fafafa',
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
          marginBottom: '60px',
        }}
      />
      <Typography
        variant="h4"
        style={{ fontWeight: 'bold', color: 'white', marginBottom: '40px' }}
      >
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
