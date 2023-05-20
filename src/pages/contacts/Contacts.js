import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const Contacts = () => {
  const telegramBWDAdminLink = 'https:/t.me/buywalletdat'
  const discordInviteLink = 'https://discord.gg/DgJuVJVhNW'
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="700px" className='pixel-border'>
        <Text fontSize="40px" textShadow="0 5px #000000">
          Contacts
        </Text>
        <Link
          href={telegramBWDAdminLink}
          _hover={{ color: '#e9bb00' }}
          isExternal
          cursor="pointer"
        >
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            telegram: @buywalletdat
          </Text>
        </Link>
        <Link
        color="#fa690e"
          href={discordInviteLink}
          _hover={{ color: '#e9bb00' }}
          isExternal
          cursor="pointer"
        >
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            {`-> Join hack forces with others on our Discord! <-`}
          </Text>
        </Link>
        <Text
          fontSize="30px"
          letterSpacing="-5.5%"
          fontFamily="VT323"
          textShadow="0 2px 2px #000000"
        >
          mail: admin@buywalletdat.com
        </Text>
      </Box>
    </Flex>
  )
}
