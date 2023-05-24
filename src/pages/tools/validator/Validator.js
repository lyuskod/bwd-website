import axios from 'axios'
import React, { useState } from 'react'
import { routes } from '../../../contants/routes'
import { Box, Flex, Text, Button, Input } from '@chakra-ui/react'
import { isValidWalletFromFormData } from '../../../scripts/wallet-helper'

export const Validator = () => {
  const [file, setFile] = useState(null)
  const [data, setData] = useState(null)
  const [message, setMessage] = useState('Check wallet.dat file for fake online')

  const onInputChange = (e) => {
    if (data) setData(null)
    setFile(e.target.files[0])
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    setMessage(null)
    const isValid = await isValidWalletFromFormData(file)
    if (isValid) {
      const data = new FormData()
      data.append('file', file)
      const response = await axios.post(routes.getWalletValidityByWallet, data)
      setData(response.data)
      return
    }

    if (!isValid) {
      if (!file) {
        setMessage('Please, choose the file to upload')
        return
      }
      setMessage('Uploaded file is not wallet.dat')
      return
    }
    setData(null)
  }
  return (
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Text className="main-text">Wallet Validator</Text>
        <form method="post" action="#" id="#">
          <Text className="primary-text">
            {data?.validity ? `Validity: ${data.validity}%` : message}
          </Text>
          <Box className="form-group files">
            <Input
              type="file"
              onChange={onInputChange}
              className="form-control"
              multiple={false}
            />
          </Box>
          <Button className="pixel-button" onClick={onSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  )
}
