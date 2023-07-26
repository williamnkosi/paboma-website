
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SideBarButton from './side-bar-button'
import { AdminSideBarSections } from './types'

type Props = {
    onButtonClick: (section: AdminSideBarSections) => void
}

const SideBar = ({ onButtonClick }: Props) => {
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
                <SideBarButton type={AdminSideBarSections.orders} onButtonClick={onButtonClick} text='Orders'></SideBarButton>
                <SideBarButton type={AdminSideBarSections.product} onButtonClick={onButtonClick} text='Products'></SideBarButton>
            </Flex>

        </Box>
    )
}

export default SideBar