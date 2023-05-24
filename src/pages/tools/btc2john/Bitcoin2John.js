import axios from 'axios'
import React, { useState } from 'react'
import { routes } from '../../../contants/routes'
import { Box, Flex, Text, Button, Input } from '@chakra-ui/react'
import { isValidWalletFromFormData } from '../../../scripts/wallet-helper'

export const Bitcoin2john = () => {
  const [file, setFile] = useState(null)
  const [hash, setHash] = useState(null)
  const [copied, setCopied] = useState(false)
  const [message, setMessage] = useState(
    'Fetch hash from wallet.dat file online'
  )

  const handleCopyHashToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hash)
      setCopied(true)
    } catch (err) {
      setMessage('Failed to copy to clipboard')
    }
  }

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
    <Flex className="outer-flex">
      <Box className="pixel-border">
        <Box>
          <Text className="main-text">Bitcoin2john online</Text>
          <form method="post" action="#" id="#">
            <Text className="primary-text">
              {' '}
              {hash ? (
                <Button
                  className="pixel-button"
                  onClick={handleCopyHashToClipboard}
                >
                  {copied ? 'Copied' : 'Copy hash to clipboard'}
                </Button>
              ) : (
                message
              )}
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
      </Box>
    </Flex>
  )
}
