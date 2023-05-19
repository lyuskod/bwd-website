import { useNavigate } from 'react-router-dom'
import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const Tools = () => {
  const navigate = useNavigate()
  const navigateBitcoin2john = () => navigate('/tools/bitcoin2john')
  const navigateValidator = () => navigate('/tools/validator')
  const navigateSolWalletCracker = () => navigate('/tools/solwalletcr')

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="700px" className="pixel-border">
        <Box>
          <Text fontSize="40px" textShadow="0 5px #000000">
            Tools
          </Text>
          <Link
            fontSize="50px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
            isExternal
            color="white"
            textDecoration="none"
            cursor="pointer"
            onClick={navigateValidator}
            _hover={{ color: '#e9bb00' }}
          >
            Wallet Validator (beta)
          </Link>
        </Box>
        <Box>
          <Link
            fontSize="50px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
            isExternal
            color="white"
            textDecoration="none"
            onClick={navigateBitcoin2john}
            cursor="pointer"
            _hover={{ color: '#e9bb00' }}
          >
            Bitcoin2john (Online)
          </Link>
        </Box>
        <Box>
          <Link
            fontSize="50px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
            isExternal
            color="white"
            textDecoration="none"
            onClick={navigateSolWalletCracker}
            cursor="pointer"
            _hover={{ color: '#e9bb00' }}
          >
            Solana Wallet Cracker
          </Link>
          <Text/>
          <Text/>
        </Box>
      </Box>
    </Flex>
  )
}
