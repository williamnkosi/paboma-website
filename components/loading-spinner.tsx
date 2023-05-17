import React from 'react'
import { Spinner } from '@chakra-ui/react'
type Props = {}

const LoadingSpinner = (props: Props) => {
    return (
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    )
}

export default LoadingSpinner