import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import OrdersTable from './orders-table'
import OrdersDetail from './orders-detail'

type Props = {}

const OrdersSection = (props: Props) => {
    return (<>

        <OrdersDetail />



        <Box borderRadius={4} width={'80%'} marginLeft={45} padding={8} bg={'white'}>
            < Flex >
                <Text>Orders</Text>
                <Box w={16} />
            </Flex >

            <OrdersTable />
        </Box >
    </>

    )
}

export default OrdersSection