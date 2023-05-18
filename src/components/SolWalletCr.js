import { Box, Flex, Text, Button, Image } from '@chakra-ui/react'
import SolWalletGif from '../assets/gifs/solwalletgif.gif'

export const SolWalletCr = () => {
  const paymentLink = 'https://satoshi-box.com/pay/CIRpdZ'
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="1000px">
        <Text fontSize="35px" textShadow="0 5px #000000">
          Solana Wallet Cracker
        </Text>
        <Image
          src={SolWalletGif}
          cursor="pointer"
          width="450px"
          height="300px"
          margin="0 15px"
        />
        <Text
          fontSize="25px"
          letterSpacing="-5.5%"
          fontFamily="VT323"
          textShadow="0 2px 2px #000000"
        >
          Script do parse mnemonic phrases and looks for wallet with positive
          balance. Stores wallet data (pubKey, privKey, balance, seed) on your
          pc
        </Text>
        {/* <Text
                    fontSize="25px"
                    letterSpacing="-5.5%"
                    fontFamily="VT323"
                    textShadow="0 2px 2px #000000"
                >
                    All the wallet data (public key, private key, balance, seed
                    phrase) will be stored inside wallet.json file on your pc
                </Text> */}
        <Button
          backgroundColor="#fa690e"
          _hover={{ bgColor: '#45216b' }}
          borderRadius="5px"
          boxShadow="0px 2px 2px 1px #0F0F0F"
          color="white"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          onClick={() => window.open(paymentLink)}
        >
          BUY
        </Button>
      </Box>
    </Flex>
  )
}
