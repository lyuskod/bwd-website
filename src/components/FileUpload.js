import React, { useState } from 'react'
import './FileUpload.css'
import { Box, Button, Flex, Text, Link } from '@chakra-ui/react'
import fs from 'fs'
import { handleCheck } from '../api/tools/fake-wallet-checker'

export const FileUpload = () => {
    const [file, setFile] = useState(null)
    const [data, setData] = useState(null)

    const onInputChange = (e) => {
        setFile(e.target.files[0])
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        setData(await handleCheck(file))
    }

    return (
        <form method="post" action="#" id="#">
            <Text>{data?.address == null ? '' : data.address}</Text>
            <Text>{data?.message == null ? '' : data.message}</Text>
            <div className="form-group files">
                <input
                    type="file"
                    onChange={onInputChange}
                    className="form-control"
                    multiple={false}
                />
            </div>
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
    )
}
