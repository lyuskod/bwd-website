const templates = {
  blockchaincom: 'https://www.blockchain.com/explorer/addresses/btc/',
  blockchaircom: 'https://blockchair.com/bitcoin/address/',
}

export const generateBlockchainComLink = (address) =>
  templates.blockchaincom + address

export const generateBlockchairComLink = (address) =>
  templates.blockchaircom + address

export const getShortWalletAddressRepresentation = (address) => {
  const symbols_slice = 4
  const fPart = address.slice(0, symbols_slice)
  const lPart = address.slice(address.length - symbols_slice)
  return `${fPart}...${lPart}`
}

export const parseAddressFromWalletDatContent = (content) => {
  return content
    .match(/name"\w+/)[0]
    .replace('name"', '')
    .trim()
}

export const isValidWalletFromFormData = async (file) => {
  if (!file) return false

  const content = await file.text()
  return (
    file.name.endsWith('.dat') &&
    content.includes('ckey!') &&
    parseAddressFromWalletDatContent(content)
  )
}
