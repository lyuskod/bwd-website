import { Box, Flex, Text, Link } from '@chakra-ui/react'

export const Contacts = () => {
  const telegramBWDAdminLink = 'https:/t.me/buywalletdat'
  const discordInviteLink = 'https://discord.gg/DgJuVJVhNW'
  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Contacts</Text>
        <Link className="link" href={telegramBWDAdminLink} isExternal>
          <Text className="primary-text">telegram: @buywalletdat</Text>
        </Link>
        <Link
          className="link"
          color="#fa690e"
          href={discordInviteLink}
          isExternal
        >
          <Text className="primary-text">
            {`-> Join hack forces with others on our Discord! <-`}
          </Text>
        </Link>
        <Text className="primary-text">mail: admin@buywalletdat.com</Text>
      </Box>
    </Flex>
  )
}
