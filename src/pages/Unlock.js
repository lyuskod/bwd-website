import { useNavigate } from 'react-router-dom'
import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const UnlockWallet = () => {
  const navigate = useNavigate()
  const navigateBruteforce = () => navigate('/guides/unlockwallet/bruteforce')
  const navigateDictionary = () => navigate('/guides/unlockwallet/dictionary')
  const navigateHashcat = () => navigate('/guides/unlockwallet/hashcat')

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <Box>
          <Text fontSize="48px" textShadow="0 5px #000000">
            Unlock
          </Text>
          <Box>
            <Link
              fontSize="50px"
              letterSpacing="-5.5%"
              fontFamily="VT323"
              textShadow="0 2px 2px #000000"
              isExternal
              color="white"
              textDecoration="none"
              cursor="pointer"
              onClick={navigateHashcat}
              _hover={{ color: '#fa690e' }}
            >
              Hashcat (Watch first)
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
              cursor="pointer"
              onClick={navigateBruteforce}
              _hover={{ color: '#fa690e' }}
            >
              Bruteforce attack
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
              cursor="pointer"
              onClick={navigateDictionary}
              _hover={{ color: '#fa690e' }}
            >
              Dictionary attack
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
