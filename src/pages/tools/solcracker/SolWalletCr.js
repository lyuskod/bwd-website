import { Box, Flex, Text, Button, Image } from '@chakra-ui/react'
import SolWalletGif from '../../../assets/gifs/solwalletgif.gif'

export const SolWalletCr = () => {
  const paymentLink = 'https://satoshi-box.com/pay/CIRpdZ'
  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      paddingBottom="150px"
      overflowY="scroll"
    >
      <Box width="700px" className="pixel-border">
        <Text fontSize="35px" textShadow="0 5px #000000">
          Solana Wallet Cracker
        </Text>
        <Box>
          <Text
            fontSize="25px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            Script do parse mnemonic phrases and looks for wallet with positive
            balance
          </Text>
        </Box>
        <Image
          src={SolWalletGif}
          cursor="pointer"
          width="600px"
          height="220px"
          margin="0 15px"
          align="center"
        />

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
