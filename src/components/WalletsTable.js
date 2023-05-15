import React, { useEffect, useState } from 'react'
import {
    Box,
    TableContainer,
    Heading,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Link,
    Image,
} from '@chakra-ui/react'
import { generateBlockchainComLink } from '../scripts/wallet-helper'
import axios from 'axios'
import { routes } from '../contants/routes'
import Bitcoin from '../assets/icons/bitcoin.png'

export const WalletsTable = () => {
    const [data, setData] = useState([])
    const loadData = async () => {
        const response = await axios.get(routes.getAllWallets)
        setData(response.data)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <TableContainer
            className="styled-table"
            maxHeight="450px"
            overflowY="auto"
        >
            <Box overflowY="auto">
                <Heading textShadow="0 5px #000000" textAlign="center">
                    Under development
                </Heading>
                <Box overflowY="auto" maxHeight="450px">
                    <Table>
                        <Thead position="sticky" top={0} background="#fa690e">
                            <Tr>
                                <Th style={{ textAlign: 'center' }}>No.</Th>
                                <Th style={{ textAlign: 'center' }}>Balance</Th>
                                <Th style={{ textAlign: 'center' }}>Address</Th>
                                <Th style={{ textAlign: 'center' }}>Details</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((wallet, index) => {
                                return (
                                    <Tr>
                                        <Td>{index + 1}</Td>
                                        <Td>
                                            <Image
                                                src={Bitcoin}
                                                cursor="pointer"
                                                boxSize="25px"
                                                // width="25px"
                                                margin="0 15px"
                                                loading="lazy"
                                            />
                                            {wallet.Balance}
                                            <Image
                                                src={Bitcoin}
                                                cursor="pointer"
                                                boxSize="25px"
                                                // width="25px"
                                                margin="0 15px"
                                                loading="lazy"
                                            />
                                        </Td>
                                        <Td>
                                            <Link
                                                isExternal
                                                href={generateBlockchainComLink(
                                                    wallet.Address
                                                )}
                                                _hover={{
                                                    color: '#fa690e',
                                                }}
                                                color="white"
                                                textDecoration="none"
                                            >
                                                {wallet.Address}
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link
                                                href={`/view/${wallet.Address}`}
                                            >
                                                <button
                                                    className="btn btn-contact"
                                                    _hover={{
                                                        bgColor: '#45216b',
                                                    }}
                                                >
                                                    View Details
                                                </button>
                                            </Link>
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </TableContainer>
    )
}
