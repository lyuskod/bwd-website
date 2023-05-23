import { Home } from '../pages/home/Home'
import { Guides } from '../pages/guides/Guides'
import { Tools } from '../pages/tools/Tools'
import { Bitcoin2john } from '../pages/tools/btc2john/Bitcoin2John'
import { Validator } from '../pages/tools/validator/Validator'
import { Contacts } from '../pages/contacts/Contacts'
import { Wallets } from '../pages/wallets/Wallets'
import { WalletView } from '../pages/wallets/WalletView'
import { Navigate, Route, Routes } from 'react-router-dom'
import { OpenWallet } from '../pages/guides/openwallet/OpenWallet'
import { UnlockWallet } from '../pages/guides/unlockwallet/Unlock'
import { Bruteforce } from '../pages/guides/unlockwallet/Bruteforce'
import { Dictionary } from '../pages/guides/unlockwallet/Dictionary'
import { Hashcat } from '../pages/guides/unlockwallet/Hashcat'
import { Earn } from '../pages/earn/Earn'
import { SolWalletCr } from '../pages/tools/solcracker/SolWalletCr'
import { AddressFetcher } from '../pages/tools/addressfetcher/AddressFetcher'

export const DefinedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route exact path="/home" element={<Home />} />
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
      <Route exact path="/tools/validator" element={<Validator />} />
      <Route exact path="/tools/bitcoin2john" element={<Bitcoin2john />} />
      <Route exact path="/tools/addressfetcher" element={<AddressFetcher />} />
    </Routes>
  )
}
