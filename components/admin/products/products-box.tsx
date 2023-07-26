import { Box, Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import TableGenerator from '../table/table'

type Props = {}


const ProdcutsBox = (props: Props) => {
    return (
        <Box width={'80%'} marginLeft={45} padding={8} bg={'white'}>
            < Flex >
                <Text>Prodcuts</Text>
                <Box w={16} />
            </Flex >
            <TableGenerator />
        </Box >
    )
}

export default ProdcutsBox