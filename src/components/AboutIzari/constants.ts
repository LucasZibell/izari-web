import CommsIcon from '@mui/icons-material/CompareArrows'
import TokenIcon from '@mui/icons-material/Token'
import PaidIcon from '@mui/icons-material/Paid'
import WalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AddressesIcon from '@mui/icons-material/ImportContacts'
import PaymentsIcon from '@mui/icons-material/Payments'
import AccountIcon from '@mui/icons-material/AccountBalance'
import ChromeLogo from '@/assets/chrome-logo.png'
import FirefoxLogo from '@/assets/firefox-logo.png'
import SafariLogo from '@/assets/safari-logo.png'
import NodeLogo from '@/assets/node-logo.png'
import ReactLogo from '@/assets/react-logo.png'
import HyperspaceLogo from '@/assets/hyperspace-logo.jpeg'
import MainnetLogo from '@/assets/mainnet-logo.png'

export const featuresFirstColumn = [
  {
    id: 'feat-node-comms',
    FeatureImage: CommsIcon,
    text: 'Node Comms',
  },
  {
    id: 'feat-addresses',
    FeatureImage: AddressesIcon,
    text: 'Addresses',
  },
  {
    id: 'feat-tokens',
    FeatureImage: TokenIcon,
    text: 'Tokens',
  },
  {
    id: 'feat-transactions',
    FeatureImage: PaidIcon,
    text: 'Transactions',
  },
]

export const featuresSecondColumn = [
  {
    id: 'feat-wallet',
    FeatureImage: WalletIcon,
    text: 'Wallet',
  },
  {
    id: 'feat-account',
    FeatureImage: AccountIcon,
    text: 'Account',
  },
  {
    id: 'feat-payment-channel',
    FeatureImage: PaymentsIcon,
    text: 'Payment Channel',
  },
]

export const networks = [
  { id: 'hyperspace-network', alt: 'hyperspace', image: HyperspaceLogo },
  { id: 'mainnet-network', alt: 'mainnet', image: MainnetLogo },
]

export const environments = [
  { id: 'node-env', alt: 'node js', image: NodeLogo },
  { id: 'react-env', alt: 'react js', image: ReactLogo },
]

export const webBrowsers = [
  { id: 'chrome-browser', alt: 'chrome', image: ChromeLogo },
  { id: 'firefox-browser', alt: 'firefox', image: FirefoxLogo },
  { id: 'safari-browser', alt: 'safari', image: SafariLogo },
]
