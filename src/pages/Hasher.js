import axios from 'axios'
import React, { useState } from 'react'
import { routes } from '../contants/routes'
import { Box, Flex, Text, Button, Input } from '@chakra-ui/react'
import { isValidWalletFromFormData } from '../scripts/wallet-helper'

export const Hasher = () => {
  const [file, setFile] = useState(null)
  const [hash, setHash] = useState(null)
  const [message, setMessage] = useState(null)

  const onInputChange = (e) => {
    if (hash) setHash(null)
    setFile(e.target.files[0])
  }
  const onSubmit = async (e) => {
    e.preventDefault()

    setMessage(null)
    const isValid = await isValidWalletFromFormData(file)
    if (isValid) {
      const data = new FormData()
      data.append('file', file)
      const response = await axios.post(routes.getWalletHashByWallet, data)
      setHash(response.data)
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
    setHash(null)
  }
  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="530px">
        <Box>
          <Text fontSize="48px" textShadow="0 5px #000000">
            Wallet Hasher
          </Text>
          <form method="post" action="#" id="#">
            <Text
              fontSize="30px"
              letterSpacing="-5.5%"
              fontFamily="VT323"
              textShadow="0 2px 2px #000000"
            >
              {message}
            </Text>
            <Text
              fontSize="20px"
              letterSpacing="-5.5%"
              fontFamily="VT323"
              textShadow="0 2px 2px #000000"
              align="center"
            >
              {hash}
            </Text>
            <Box className="form-group files">
              <Input
                type="file"
                onChange={onInputChange}
                className="form-control"
                multiple={false}
              />
            </Box>
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
              onClick={onSubmit}
            >
              Submit
            </Button>
          </form>
          <Text
            fontSize="25px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            Fetch hash from wallet.dat using our online tool!
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}
