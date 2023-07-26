
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SideBarButton from './side-bar-button'

type Props = {}

const SideBar = (props: Props) => {
    return (
        <Box

            h="100vh"
            w="250px"
            p="4"
            bg={'white'}
            transition="ease-in-out 0.2s"
            borderWidth='1px'
        >
            {/* Your sidebar content goes here */}
            <Flex direction={'column'}>
                <SideBarButton text='Orders'></SideBarButton>

                <SideBarButton text='Products'></SideBarButton>
            </Flex>

        </Box>
    )
}

export default SideBar