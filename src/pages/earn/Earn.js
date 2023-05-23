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
          Send your wallet.dat (even public one) to us and earn 50% from each
          sale
        </Text>
        <Text className="secondary-text">
          Contact to get for more info
        </Text>
        <Button className="pixel-button" onClick={navigateContacts}>
          SEE CONTACTS
        </Button>
      </Box>
    </Flex>
  )
}
