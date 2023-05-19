import { useNavigate } from 'react-router-dom'
import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const Guides = () => {
  const navigate = useNavigate()
  const navigateHowToOpenWalletDat = () => navigate('/guides/openwallet')
  const navigateUnlockWalletDat = () => navigate('/guides/unlockwallet/')

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="700px" className='pixel-border'>
        <Box>
          <Text fontSize="40px" textShadow="0 5px #000000">
            Guides
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
            onClick={navigateHowToOpenWalletDat}
            _hover={{ color: '#e9bb00' }}
          >
            Open wallet.dat
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
            onClick={navigateUnlockWalletDat}
            cursor="pointer"
            _hover={{ color: '#e9bb00' }}
          >
            Unlock wallet.dat
          </Link>
          <Text/>
          <Text/>
        </Box>
      </Box>
    </Flex>
  )
}
