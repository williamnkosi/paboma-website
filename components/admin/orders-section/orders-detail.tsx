import { Flex, Text, Spacer, Box } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const OrdersDetail = (props: Props) => {
    return (

        <Flex direction={'column'}>
            <Flex alignContent={'space-between'}>
                <Flex direction={'column'}>
                    <Text>#2</Text>
                    <Text>17 November 2012: 10:23pm</Text>
                </Flex>
                <Spacer />
                <Text>Processing</Text>
            </Flex>
            <Box height={8} />
            <Flex alignContent={'space-evenly'}>
                <Flex direction={'column'}>
                    <Text>Email</Text>
                    <Text>randomemail@gmail.com</Text>
                </Flex>
                <Spacer />
                <Flex direction={'column'}>
                    <Text>Phone Number</Text>
                    <Text>
                        61591893234</Text>
                </Flex>
                <Spacer />
                <Flex direction={'column'}>
                    <Text>Payment</Text>
                    <Text>Manual</Text>
                </Flex>
            </Flex>
        </Flex>

    )
}

export default OrdersDetail