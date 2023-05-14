import wallets from '../data/wallets.json'

const templates = {
    blockchaincom: 'https://www.blockchain.com/explorer/addresses/btc/',
    blockchaircom: 'https://blockchair.com/bitcoin/address/',
}

export const generateBlockchainComLink = (address) =>
    templates.blockchaincom + address

export const generateBlockchairComLink = (address) =>
    templates.blockchaircom + address

export const getWalletJsonDataByAddress = (address) =>
    wallets.wallets.find((walletData) => walletData.address === address)

export const getShortWalletAddressRepresentation = (address) => {
    const symbols_slice = 4
    const fPart = address.slice(0, symbols_slice)
    const lPart = address.slice(address.length - symbols_slice)
    return `${fPart}...${lPart}`
}
