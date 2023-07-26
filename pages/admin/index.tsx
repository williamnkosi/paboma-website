import ProdcutsBox from '@/components/admin/products/products-box'
import SideBar from '@/components/admin/side-bar'
import { Flex, Text, Box, Container } from '@chakra-ui/react'

import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (
        <Flex
            maxW='100%' bg='gray.200'
            flexDirection={'row'}
        >
            <SideBar />
            <Flex width={'100%'} direction={'column'}>
                <Box borderWidth='1px' height={'50px'} width={'100%'} bg={'white'} mb={8}></Box>
                <ProdcutsBox />
            </Flex>


        </Flex>
    )
}

export default index