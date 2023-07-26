import { Button } from '@chakra-ui/button'
import React from 'react'
import { AdminSideBarSections } from './types'

type Props = {
    text: string
    type: AdminSideBarSections
    onButtonClick: (section: AdminSideBarSections) => void
}

const SideBarButton = ({ text, type, onButtonClick }: Props) => {
    return (
        <Button colorScheme='teal' variant='ghost' onClick={() => onButtonClick(type)}>{text}</Button>
    )
}

export default SideBarButton