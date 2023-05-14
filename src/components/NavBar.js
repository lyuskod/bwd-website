import React from 'react'
import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

// Icons
import Telegram from '../assets/social-media-icons/telegram_32x32.png'
import Email from '../assets/social-media-icons/email_32x32.png'

export const NavBar = () => {
    const navigate = useNavigate()
    const navigateHome = () => navigate('/')
    const navigateWallets = () => navigate('/wallets')
    const navigateContacts = () => navigate('/contacts')
    const navigateTools = () => navigate('/tools')

    return (
        <Flex justify="space-between" align="center" padding="30px">
            {/* Left NavBar */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Image
                    src={Email}
                    cursor="pointer"
                    boxSize="42px"
                    margin="0 15px"
                    onClick={navigateContacts}
                />
                <Image
                    src={Telegram}
                    cursor="pointer"
                    boxSize="42px"
                    margin="0 15px"
                    onClick={navigateContacts}
                />
            </Flex>

            {/* Right NavBar */}
            <Flex
                justify="space-around"
                align="center"
                width="40%"
                padding="30px"
            >
                <Box
                    margin="0 15px"
                    cursor="pointer"
                    _hover={{ color: '#fa690e' }}
                    onClick={navigateHome}
                >
                    Home
                </Box>
                <Spacer />
                <Box
                    margin="0 15px"
                    cursor="pointer"
                    _hover={{ color: '#fa690e' }}
                    onClick={navigateWallets}
                >
                    Wallets
                </Box>
                <Box
                    margin="0 15px"
                    cursor="pointer"
                    _hover={{ color: '#fa690e' }}
                    onClick={navigateTools}
                >
                    Tools
                </Box>
                <Spacer />
                <Box
                    margin="0 15px"
                    cursor="pointer"
                    _hover={{ color: '#fa690e' }}
                    onClick={navigateContacts}
                >
                    Contacts
                </Box>
                <Spacer />
            </Flex>
        </Flex>
    )
}
