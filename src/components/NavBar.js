import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, Image } from '@chakra-ui/react'
import Email from '../assets/smi/email_32x32.png'
import Telegram from '../assets/smi/telegram_32x32.png'
import Discord from '../assets/smi/discord_32x32.png'

export const NavBar = () => {
  const navigate = useNavigate()
  const navigateHome = () => navigate('/')
  const navigateTools = () => navigate('/tools')
  const navigateWallets = () => navigate('/wallets')
  const navigateGuides = () => navigate('/guides')
  const navigateContacts = () => navigate('/contacts')
  const navigateEarn = () => navigate('/earn')

  return (
    <Flex className="navbar-outer-flex">
      <Flex className="navbar-images-flex">
        <Image
          className="navbar-contact-img"
          src={Email}
          onClick={navigateContacts}
        />
        <Image
          className="navbar-contact-img"
          src={Telegram}
          onClick={navigateContacts}
        />
        <Image
          className="navbar-contact-img"
          src={Discord}
          onClick={navigateContacts}
        />
      </Flex>

      <Flex className="navbar-topics-flex">
        <Box className="navbar-topics-box" onClick={navigateHome}>
          Home
        </Box>
        <Box className="navbar-topics-box" onClick={navigateWallets}>
          Wallets
        </Box>
        <Box className="navbar-topics-box" onClick={navigateEarn}>
          Earn
        </Box>
        <Box className="navbar-topics-box" onClick={navigateTools}>
          Tools
        </Box>
        <Box className="navbar-topics-box" onClick={navigateGuides}>
          Guides
        </Box>
        <Box className="navbar-topics-box" onClick={navigateContacts}>
          Contacts
        </Box>
      </Flex>
    </Flex>
  )
}
