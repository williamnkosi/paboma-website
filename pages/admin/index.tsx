import SideBar from '@/components/admin/side-bar'
import { Flex, Text, Box } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (
        <Box
        >
            <SideBar />
            <Box position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}// Set the height of the box to 300px
                bg="gray.100" >
                <Box bg='white' w='100%' p={4} borderBottomWidth='1px' paddingBottom='24px' color='white'>
                    This is the Box
                </Box>
            </Box>
        </Box >
    )
}

export default index