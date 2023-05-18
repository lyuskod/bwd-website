import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Earn = () => {
  const navigate = useNavigate()
  const navigateContacts = () => navigate('/contacts')
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <Text fontSize="48px" textShadow="0 5px #000000">
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
          Contact us for more info
        </Text>
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
          onClick={navigateContacts}
        >
          SEE CONTACTS
        </Button>
      </Box>
    </Flex>
  )
}
