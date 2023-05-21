const baseUrl = 'https://api.buywalletdat.com/api'

export const routes = {
  getAllWallets: `${baseUrl}/getAllWallets`,
  getWalletByAddress: `${baseUrl}/getWalletByAddress/`,
  getWalletHashByWallet: `${baseUrl}/getWalletHashByWallet`,
  getWalletValidityByWallet: `${baseUrl}/getWalletValidityByWallet`,
  getWalletAddressByWallet: `${baseUrl}/getWalletAddressByWallet`,
}
