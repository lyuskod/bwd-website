import axios from 'axios'
import {
    generateBlockchainComLink,
    generateBlockchairComLink,
} from '../scripts/wallet-helper'
import { routes } from '../contants/routes'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Link, Flex, Button, Text, Image } from '@chakra-ui/react'

export const WalletView = () => {
    const navigate = useNavigate()
    const navigateBack = () => {
        navigate(-1)
    }

    const [wallet, setWallet] = useState({})
    const { Address } = useParams()
    useEffect(() => {
        axios
            .get(routes.getWalletByAddress + Address)
            .then((resp) => setWallet({ ...resp.data[0] }))
    }, [Address])
    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
            paddingBottom="150px"
        >
            <Image
                src={wallet.Screenshot}
                cursor="pointer"
                boxSize="500px"
                width="800px"
                margin="0 15px"
                loading="lazy"
            />
            <Box width="520px">
                <Box bgColor="-moz-initial">
                    <Button
                        backgroundColor="red"
                        _hover={{ bgColor: '#45216b' }}
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={navigateBack}
                    >
                        GO BACK
                    </Button>
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
                        onClick={() => window.open(wallet.Satoshi)}
                    >
                        BUY
                    </Button>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        align="left"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                    >
                        <Text>{`💸 Balance: ${wallet.Balance} BTC`}</Text>
                        <Text>{`❔ Hints: ${wallet.Hints}`}</Text>
                        <Text>
                            <Link
                                href={generateBlockchainComLink(wallet.Address)}
                                isExternal
                                color="white"
                                textDecoration="none"
                                _hover={{
                                    color: '#fa690e',
                                }}
                            >
                                {`↪️ View wallet on Blockchain.com`}
                            </Link>
                        </Text>
                        <Text>
                            <Link
                                href={generateBlockchairComLink(wallet.Address)}
                                isExternal
                                color="white"
                                textDecoration="none"
                                _hover={{
                                    color: '#fa690e',
                                }}
                            >
                                {`↪️ View wallet on Blockchair.com`}
                            </Link>
                        </Text>
                        <Text>{`📦 Package: ${wallet.Package}`}</Text>
                        <Text>{`💬 Comments: ${wallet.Comments}`}</Text>
                    </Text>
                </Box>
            </Box>
        </Flex>
    )
}
