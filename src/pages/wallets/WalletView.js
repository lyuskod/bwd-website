import axios from 'axios'
import {
  generateBlockchainComLink,
  generateBlockchairComLink,
} from '../../scripts/wallet-helper'
import { routes } from '../../contants/routes'
import React, { useEffect, useState } from 'react'
import { cacheable } from '../../scripts/cacheable'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Link, Flex, Button, Text, Image } from '@chakra-ui/react'
import { isMobile } from '../../scripts/ismobile'

export const WalletView = () => {
  const navigate = useNavigate()
  const navigateBack = () => {
    navigate(-1)
  }

  const [wallet, setWallet] = useState({})
  const { Address } = useParams()

  const loadData = async () => {
    const response = await cacheable(
      async () => await axios.get(routes.getWalletByAddress + Address),
      `WalletView_${Address}`,
      {}
    )
    setWallet({ ...response.data[0] })
  }
  useEffect(() => {
    loadData()
  })

  return (
    <Flex className="outer-flex">
      {isMobile() ? (
        <Text></Text>
      ) : (
        <Image
          className="wallet-view-img"
          src={wallet.Screenshot}
          loading="lazy"
        />
      )}
      <Box className="pixel-border">
        <Box bgColor="black">
          <Button className="pixel-button" bgColor="red" onClick={navigateBack}>
            GO BACK
          </Button>
          <Button
            className="pixel-button"
            onClick={() => window.open(wallet.Satoshi)}
          >
            BUY
          </Button>
          <Text className="primary-text" align="left">
            {isMobile() ? (
              <Link
                isExternal
                href={wallet.Screenshot}
                className="link"
                color="#fa690e"
              >{`->Click to see wallet screenshot<-`}</Link>
            ) : (
              <Text></Text>
            )}
            <Text>{`💸 Balance: ${wallet.Balance} BTC`}</Text>
            <Text>{`❔ Hints: ${wallet.Hints}`}</Text>
            <Text>
              <Link
                href={generateBlockchainComLink(wallet.Address)}
                isExternal
                color="white"
                textDecoration="none"
                _hover={{
                  color: '#e9bb00',
                }}
              >
                {`↪️ View wallet on Blockchain.com`}
              </Link>
            </Text>
            <Text>
              <Link
                href={generateBlockchairComLink(wallet.Address)}
                isExternal
                color="white"
                textDecoration="none"
                _hover={{
                  color: '#e9bb00',
                }}
              >
                {`↪️ View wallet on Blockchair.com`}
              </Link>
            </Text>
            <Text>{`📦 Package: ${wallet.Package}`}</Text>
            <Text>{`💬 Comments: ${wallet.Comments}`}</Text>
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}
