import { Home } from '../pages/Home'
import { Guides } from '../pages/Guides'
import { Tools } from '../pages/Tools'
import { Hasher } from '../pages/Hasher'
import { Checker } from '../pages/Checker'
import { Contacts } from '../pages/Contacts'
import { Wallets } from '../pages/Wallets'
import { WalletView } from '../components/WalletView'
import { Route, Routes } from 'react-router-dom'
import { OpenWallet } from './OpenWallet'
import { UnlockWallet } from '../pages/Unlock'
import { Bruteforce } from './Bruteforce'
import { Dictionary } from './Dictionary'
import { Hashcat } from './Hashcat'
import { Earn } from '../pages/Earn'
import { SolWalletCr } from './SolWalletCr'

export const DefinedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/tools" element={<Tools />} />
      <Route exact path="/guides" element={<Guides />} />
      <Route exact path="/contacts" element={<Contacts />} />
      <Route exact path="/wallets" element={<Wallets />} />
      <Route exact path="/earn" element={<Earn />} />
      <Route exact path="/guides/openwallet" element={<OpenWallet />} />
      <Route exact path="/guides/unlockwallet" element={<UnlockWallet />} />
      <Route exact path="/guides/unlockwallet/hashcat" element={<Hashcat />} />
      <Route
        exact
        path="/guides/unlockwallet/bruteforce"
        element={<Bruteforce />}
      />
      <Route
        exact
        path="/guides/unlockwallet/dictionary"
        element={<Dictionary />}
      />
      <Route exact path="/tools/solwalletcr" element={<SolWalletCr />} />
      <Route path="/view/:Address" element={<WalletView />} />
      <Route exact path="/tools/walletcheck" element={<Checker />} />
      <Route exact path="/tools/wallethash" element={<Hasher />} />
    </Routes>
  )
}
