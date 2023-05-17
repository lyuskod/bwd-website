import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import axios from 'axios'
import { routes } from '../contants/routes'
import { sleep } from '../scripts/sleep'

export const SalesCounter = () => {
    const defaultSalesCount = 0
    const [salesCount, setSalesCount] = useState(defaultSalesCount)
    const loadData = async () => {
        const response = await axios.get(routes.getSalesCount)
        setSalesCount(response.data.sales)
        sleep(120_0000)
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <Flex
            align="center"
            justifyContent="center"
            fontSize="22.5px"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
            isExternal
            color="white"
            textDecoration="none"
            cursor="pointer"
        >
            {`Sales count: ${salesCount}`}
        </Flex>
    )
}
