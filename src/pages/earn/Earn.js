import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Earn = () => {
  const navigate = useNavigate()
  const navigateContacts = () => navigate('/contacts')
  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Earn</Text>
        <Text className="primary-text">
          Send any private wallet.dat to us and earn 50% from each
          sale + 10% of balance if it will be unlocked
        </Text>
        <Text className="secondary-text">
          More info on Discord
        </Text>
        <Button className="pixel-button" onClick={navigateContacts}>
          SEE CONTACTS
        </Button>
      </Box>
    </Flex>
  )
}
