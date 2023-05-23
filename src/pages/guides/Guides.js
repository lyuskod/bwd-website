import { useNavigate } from 'react-router-dom'
import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const Guides = () => {
  const navigate = useNavigate()
  const navigateHowToOpenWalletDat = () => navigate('/guides/openwallet')
  const navigateUnlockWalletDat = () => navigate('/guides/unlockwallet/')

  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Box>
          <Text className="main-text">Guides</Text>
          <Link
            className="link"
            isExternal
            onClick={navigateHowToOpenWalletDat}
          >
            Open wallet.dat
          </Link>
        </Box>
        <Box>
          <Link className="link" isExternal onClick={navigateUnlockWalletDat}>
            Unlock wallet.dat
          </Link>
          <Text />
          <Text />
        </Box>
      </Box>
    </Flex>
  )
}
