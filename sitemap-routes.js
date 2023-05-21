import { Route, Routes } from 'react-router-dom'
import React from 'react'

export default (
  <Routes>
    <Route path="/" />
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
    <Route path="/view/1BSmyTdYpsHA5JhLS9azGmVADuJRiLWE5Z" />
    <Route path="/view/1JEsngBPtTs56qdx7UT3VzkusdmEBPAXCy" />
    <Route path="/view/1BiA2yvL3GWuGGVr7v1cGCbH6WPYvoG4tL" />
    <Route path="/view/14PEUoKuRB9Q7yfS94cRXh2XugsrBxbxAo" />
    <Route path="/view/1F654t1HxrZtg7uhcXyZeFvRsyB8HCnBXJ" />
    <Route path="/view/1Gj2KiTy9SFtuFSJECmpePseYchhkU3gXQ" />
    <Route path="/view/1N8L17Z7D6bBCWkSKABDf2qqJNHT1R9fv7" />
    <Route path="/view/1KDUcZh5Z6H1of4Pwoy5ojJtkQxcQBHhnH" />
    <Route path="/view/1E87cVPLZ938w7vYEA1e9RWSc8mESPA3J5" />
    <Route path="/view/1JqPFnGPhHhy54zJKmC1MPiczzgFjCmzE9" />
    <Route path="/view/12PpzLTHNWCLsHPgHMNd9ebj7bwbTxs33u" />
    <Route path="/view/18jANvQ6AuVGJnea4EhmXiAf6bHR5qKjPB" />
    <Route path="/view/1FcHtQuvWrFLzqRKVgaaGHMEzL1o9bb36U" />
    <Route path="/view/19Hj5Pzi4hCj12porw97i183XYTrScbtXS" />
    <Route path="/view/1Hrbgj881yoMYYvNvPkgGgEx6Kw8JxirLK" />
  </Routes>
)
