import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { FileUpload } from '../components/FileUpload'

export const FakeWalletChecker = () => {
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
                        Fake Wallet Checker
                    </Text>
                    <FileUpload />
                    <Text
                        fontSize="25px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                    >
                        Check your wallet.dat for fake using our online tool!
                    </Text>
                </div>
            </Box>
        </Flex>
    )
}
