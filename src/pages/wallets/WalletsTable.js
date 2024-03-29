import {
  Tr,
  Th,
  Td,
  Box,
  Link,
  Table,
  Thead,
  Tbody,
  TableContainer,
} from '@chakra-ui/react'
import axios from 'axios'
import { routes } from '../../contants/routes'
import React, { useEffect, useState } from 'react'
import {
  generateBlockchainComLink,
  getShortWalletAddressRepresentation,
} from '../../scripts/wallet-helper'

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
    <TableContainer className="styled-table">
      <Box overflowY="auto">
        <Box overflowY="auto" maxHeight="450px">
          <Table>
            <Thead position="sticky" top={0} background="#c09522">
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
                  <Tr key={index + 1}>
                    <Td>{index + 1}</Td>
                    <Td>{`💰 ${wallet.Balance} 💰`}</Td>
                    <Td>
                      <Link
                        isExternal
                        href={generateBlockchainComLink(wallet.Address)}
                        _hover={{
                          color: '#e9bb00',
                        }}
                        color="c09522"
                        textDecoration="none"
                      >
                        {getShortWalletAddressRepresentation(wallet.Address)}
                      </Link>
                    </Td>
                    <Td>
                      <Link href={`/view/${wallet.Address}`}>
                        <button className="wallet-view-details-btn">
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
