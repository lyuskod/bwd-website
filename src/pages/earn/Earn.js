import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Earn = () => {
  const navigate = useNavigate()
  const navigateContacts = () => navigate('/contacts')
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="600px" className="pixel-border">
        <Text fontSize="40px" textShadow="0 5px #000000">
          Earn
        </Text>
        <Text
          fontSize="30px"
          letterSpacing="-5.5%"
          fontFamily="VT323"
          textShadow="0 2px 2px #000000"
        >
          Send your wallet.dat to us and earn 50% from each sale
        </Text>
        <Text
          fontSize="30px"
          letterSpacing="-5.5%"
          fontFamily="VT323"
          textShadow="0 2px 2px #000000"
        >
          Contact to get for more info
        </Text>
        <Button
          className="pixel-button"
          onClick={navigateContacts}
        >
          SEE CONTACTS
        </Button>
      </Box>
    </Flex>
  )
}
