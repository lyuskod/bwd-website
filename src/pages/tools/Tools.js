import { useNavigate } from 'react-router-dom'
import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const Tools = () => {
  const navigate = useNavigate()
  const navigateBitcoin2john = () => navigate('/tools/bitcoin2john')
  const navigateValidator = () => navigate('/tools/validator')
  const navigateSolWalletCracker = () => navigate('/tools/solwalletcr')
  const navigateAddressFetcher = () => navigate('/tools/addressfetcher')

  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Box>
          <Text className="main-text">Tools</Text>
          <Link className="link" isExternal onClick={navigateValidator}>
            Wallet Validator (beta)
          </Link>
        </Box>
        <Box>
          <Link className="link" isExternal onClick={navigateAddressFetcher}>
            Address Fetcher (Online)
          </Link>
        </Box>
        <Box>
          <Link className="link" isExternal onClick={navigateBitcoin2john}>
            Bitcoin2john (Online)
          </Link>
        </Box>
        <Box>
          <Link className="link" isExternal onClick={navigateSolWalletCracker}>
            Solana Wallet Cracker
          </Link>
          <Text />
          <Text />
        </Box>
      </Box>
    </Flex>
  )
}
