import { Button } from '@chakra-ui/button'
import React from 'react'

type Props = {
    text: string
}

const SideBarButton = ({ text }: Props) => {
    return (
        <Button colorScheme='teal' variant='ghost'>{text}</Button>
    )
}

export default SideBarButton