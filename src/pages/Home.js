import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    const navigateToWallets = () => navigate('/wallets')

    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
            paddingBottom="150px"
        >
            <Box width="530px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">
                        Welcome!
                    </Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                    >
                        Shop of bitcoin wallets with lost passwords
                    </Text>
                    <Text
                        fontSize="25px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                    >
                        Coming soon!
                    </Text>
                </div>
                <Box>
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
                        onClick={navigateToWallets}
                    >
                        BUY
                    </Button>
                </Box>
            </Box>
        </Flex>
    )
}
