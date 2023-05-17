import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import Email from '../assets/smi/email_32x32.png'
import Telegram from '../assets/smi/telegram_32x32.png'

export const NavBar = () => {
    const navigate = useNavigate()
    const navigateHome = () => navigate('/')
    const navigateTools = () => navigate('/tools')
    const navigateWallets = () => navigate('/wallets')
    const navigateGuides = () => navigate('/guides')
    const navigateContacts = () => navigate('/contacts')

    return (
        <Flex justify="space-between" align="center" padding="30px">
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
                <Spacer />
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
                    onClick={navigateGuides}
                >
                    Guides
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
