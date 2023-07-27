import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const OrdersTable = (props: Props) => {
    const rowBackgroundColor = useColorModeValue('red.100', 'red.800');
    return (
        <TableContainer >
            <Table size={'lg'} >
                <Thead>
                    <Tr>
                        <Th>Order</Th>
                        <Th >Date Added</Th>
                        <Th >Customer</Th>
                        <Th >Status</Th>
                        <Th >Payment Status</Th>
                        <Th >Total</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    <Tr _hover={{ background: rowBackgroundColor }}>
                        <Td>#1</Td>
                        <Td >11-03-1993</Td>
                        <Td >William</Td>
                        <Td >not done</Td>
                        <Td >Awaiting</Td>
                        <Td isNumeric>100</Td>
                    </Tr>

                    <Tr _hover={{ background: rowBackgroundColor }} >
                        <Td>#1</Td>
                        <Td >11-03-1993</Td>
                        <Td >William</Td>
                        <Td >not done</Td>
                        <Td >Awaiting</Td>
                        <Td isNumeric>100</Td>
                    </Tr>
                    <Tr _hover={{ background: rowBackgroundColor }} >
                        <Td>#1</Td>
                        <Td >11-03-1993</Td>
                        <Td >William</Td>
                        <Td >not done</Td>
                        <Td >Awaiting</Td>
                        <Td isNumeric>100</Td>
                    </Tr>
                </Tbody>
                <Tfoot>

                </Tfoot>
            </Table>
        </TableContainer >
    )
}

export default OrdersTable