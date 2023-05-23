import { useNavigate } from 'react-router-dom'
import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const UnlockWallet = () => {
  const navigate = useNavigate()
  const navigateBruteforce = () => navigate('/guides/unlockwallet/bruteforce')
  const navigateDictionary = () => navigate('/guides/unlockwallet/dictionary')
  const navigateHashcat = () => navigate('/guides/unlockwallet/hashcat')

  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Box>
          <Text className="main-text">Unlock</Text>
          <Box>
            <Link className="link" isExternal onClick={navigateHashcat}>
              Hashcat (Watch first)
            </Link>
          </Box>
          <Box>
            <Link className="link" isExternal onClick={navigateBruteforce}>
              Bruteforce attack
            </Link>
          </Box>
          <Box>
            <Link className="link" isExternal onClick={navigateDictionary}>
              Dictionary attack
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
