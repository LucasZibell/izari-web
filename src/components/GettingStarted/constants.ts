export const specificFeatures = [
  '@zondax/izari-filecoin',
  '@zondax/izari-filecoin/rpc',
  '@zondax/izari-filecoin/address',
  '@zondax/izari-filecoin/transaction',
  '@zondax/izari-filecoin/wallet',
  '@zondax/izari-filecoin/account',
  '@zondax/izari-filecoin/artifacts',
  '@zondax/izari-filecoin/payment',
]

export const codeExample = `import { Token } from "@zondax/izari-filecoin";
// const { Token } = require("@zondax/izari-filecoin"); CommonJS Modules

// Using specific import
import { Token as Token2 } from "@zondax/izari-filecoin/token"

const valueInFil = Token.fromAtto("10000000000000000");

const valueInFil2 = Token2.fromAtto("10000000000000000");`
