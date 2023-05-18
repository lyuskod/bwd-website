/* eslint-disable jsx-a11y/no-distracting-elements */
import { Box, Text } from '@chakra-ui/react'

export const Ticker = () => {
  return (
    <Box class="ticker">
      <Box class="news">
        <marquee>
          <Text fontSize="8px">Super low prices due opening!</Text>
        </marquee>
      </Box>
    </Box>
  )
}
