const baseUrl = 'http://api.buywalletdat.com:5050/api'

export const routes = {
    getAllWallets: `${baseUrl}/getAllWallets`,
    getWalletByAddress: `${baseUrl}/getWalletByAddress/`,
    getWalletHashByWallet: `${baseUrl}/getWalletHashByWallet`,
    getWalletValidityByWallet: `${baseUrl}/getWalletValidityByWallet`,
}
