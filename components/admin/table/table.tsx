import { Table, TableContainer, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react';
import React from 'react'

type Props = {}

const TableGenerator = (props: Props) => {
    return (
        <TableContainer >
            <Table size={'lg'} variant='striped'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th >Status</Th>
                        <Th isNumeric>Inventory</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td >testing</Td>
                        <Td isNumeric>100</Td>
                    </Tr>
                    <Tr>
                        <Td>inches</Td>
                        <Td >testing</Td>
                        <Td isNumeric>100</Td>
                    </Tr>
                    <Tr>
                        <Td>inches</Td>
                        <Td >testing</Td>
                        <Td isNumeric>100</Td>
                    </Tr>
                </Tbody>
                <Tfoot>

                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default TableGenerator;