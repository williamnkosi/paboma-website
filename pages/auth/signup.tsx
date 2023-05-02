import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";

type Props = {}

const Signup = (props: Props) => {
    return (
        <Flex width="100vw" height="100vh" align="center" justify="center" bg="gray.100">
          <Box width="400px" borderWidth="1px" borderRadius="md" boxShadow="lg" p={8} bg="white">
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              Signup
            </Text>
            <VStack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Enter name" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter email address" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter password" />
              </FormControl>
              <Button colorScheme="blue" width="full">
                Sign Up
              </Button>
            </VStack>
          </Box>
        </Flex>
      );
}

export default Signup