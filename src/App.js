import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Contacts } from './pages/Contacts'
import { Wallets } from './pages/Wallets'
import { WalletView } from './components/WalletView'
import { Tools } from './pages/Tools'
import { FakeWalletChecker } from './pages/FakeWalletChecker'
import { WalletHasher } from './pages/WalletHasher'

function App() {
    return (
        <Router>
            <div className="overlay">
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/contacts" element={<Contacts />} />
                        <Route exact path="/wallets" element={<Wallets />} />
                        <Route path="/view/:Address" element={<WalletView />} />
                        <Route exact path="/tools" element={<Tools />} />
                        <Route
                            exact
                            path="/tools/walletcheck"
                            element={<FakeWalletChecker />}
                        />
                        <Route
                            exact
                            path="/tools/wallethash"
                            element={<WalletHasher />}
                        />
                    </Routes>
                </div>
                <div className="moving-background" />
            </div>
        </Router>
    )
}

export default App
