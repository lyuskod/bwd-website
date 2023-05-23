import { Box, Flex, Text, Button, Image } from '@chakra-ui/react'
import SolWalletGif from '../../../assets/gifs/solwalletgif.gif'

export const SolWalletCr = () => {
  const paymentLink = 'https://satoshi-box.com/pay/CIRpdZ'
  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Solana Wallet Cracker</Text>
        <Box>
          <Text className="primary-text">
            Script do parse mnemonic phrases and looks for wallet with positive
            balance
          </Text>
        </Box>
        <Image className="sol-gif-img" src={SolWalletGif} />

        <Box>
          <Button
            className="pixel-button"
            onClick={() => window.open(paymentLink)}
          >
            BUY
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}
