import { Tr, Td } from '@chakra-ui/react'
import React from 'react'

type Props = {
    name: string,
    status: string,
    inventory: string,
}

const TableRow = ({ name, status, inventory }: Props) => {
    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{status}</Td>
            <Td isNumeric>{inventory}</Td>
        </Tr>
    )
}

export default TableRow