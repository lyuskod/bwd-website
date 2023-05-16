import { Home } from '../pages/Home'
import { Tools } from '../pages/Tools'
import { Hasher } from '../pages/Hasher'
import { Checker } from '../pages/Checker'
import { Contacts } from '../pages/Contacts'
import { Wallets } from '../pages/Wallets'
import { WalletView } from '../components/WalletView'
import { Route, Routes } from 'react-router-dom'

export const DefinedRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/wallets" element={<Wallets />} />
            <Route path="/view/:Address" element={<WalletView />} />
            <Route exact path="/tools" element={<Tools />} />
            <Route exact path="/tools/walletcheck" element={<Checker />} />
            <Route exact path="/tools/wallethash" element={<Hasher />} />
        </Routes>
    )
}
