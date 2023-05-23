import { Route, Routes } from 'react-router-dom'
import React from 'react'

export default (
  <Routes>
    <Route path="/" />
    <Route path="/home" />
    <Route path="/tools" />
    <Route path="/guides" />
    <Route path="/contacts" />
    <Route path="/wallets" />
    <Route path="/earn" />
    <Route path="/guides/openwallet" />
    <Route path="/guides/unlockwallet" />
    <Route path="/guides/unlockwallet/hashcat" />
    <Route path="/guides/unlockwallet/bruteforce" />
    <Route path="/guides/unlockwallet/dictionary" />
    <Route path="/tools/solwalletcr" />
    <Route path="/tools/validator" />
    <Route path="/tools/bitcoin2john" />
    <Route path="/tools/addressfetcher" />
    {/* Wallets */}
    <Route path="/view/:Address" />
  </Routes>
)
