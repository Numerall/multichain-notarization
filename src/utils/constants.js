const {
  POLYGON_WEB3_PROVIDER,
  POLYGON_CONTRACT_ADDRESS,
  ETHEREUM_WEB3_PROVIDER,
  ETHEREUM_CONTRACT_ADDRESS,
  BINANCE_WEB3_PROVIDER,
  BINANCE_CONTRACT_ADDRESS,
  MATIC_INFURA_URL,
  GOERLI_INFURA_URL,
  BSC_URL,
} = require('../config');

const CONTRACT_EVENTS = {
  setData: [
    {
      contractName: 'notarizaion',
      eventName: 'Notarized',
    },
  ],
};

const WEB3_PROVIDERS = {
  polygon: {
    name: 'polygon',
    web3: POLYGON_WEB3_PROVIDER,
    contract: {
      notarization: POLYGON_CONTRACT_ADDRESS,
    },
    resultArray: 1,
    ethGasPriceAPI: {
      url: POLYGON_WEB3_PROVIDER,
      method: 'post',
      data: { jsonrpc: '2.0', method: 'eth_gasPrice', params: [], id: 1 },
      headers: { 'Content-Type': 'application/json' },
      resultKey: 'result',
    },
    symbol: 'MATIC',
    explorerURL: 'https://mumbai.polygonscan.com/tx/',
  },

  ethereum: {
    name: 'ethereum',
    web3: ETHEREUM_WEB3_PROVIDER,
    contract: {
      notarization: ETHEREUM_CONTRACT_ADDRESS,
    },
    resultArray: 0,
    ethGasPriceAPI: {
      url: ETHEREUM_WEB3_PROVIDER,
      method: 'post',
      data: { jsonrpc: '2.0', method: 'eth_gasPrice', params: [], id: 1 },
      headers: { 'Content-Type': 'application/json' },
      resultKey: 'result',
    },
    symbol: 'ETH',
    explorerURL: 'https://goerli.etherscan.io/tx/',
  },

  binance: {
    name: 'binance',
    web3: BINANCE_WEB3_PROVIDER,
    contract: {
      notarization: BINANCE_CONTRACT_ADDRESS,
    },
    resultArray: 0,
    ethGasPriceAPI: {
      url: BINANCE_WEB3_PROVIDER,
      method: 'post',
      data: { jsonrpc: '2.0', method: 'eth_gasPrice', params: [], id: 1 },
      headers: { 'Content-Type': 'application/json' },
      resultKey: 'result',
    },
    symbol: 'BNB',
    explorerURL: 'https://testnet.bscscan.com/tx/',
  },
};
const CONTRACT_ERRORS = {
  E1: {
    message: 'Document already exists to different user',
    uploadSuccess: false,
  },
  E2: { message: 'Document Doesnot exists' },
  A1: { message: 'Cannot read logs' },
};

module.exports = { CONTRACT_EVENTS, CONTRACT_ERRORS, WEB3_PROVIDERS };
