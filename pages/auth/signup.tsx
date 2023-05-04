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
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder="Enter your first name." />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder="Enter your last name." />
              </FormControl>
              <FormControl id="userName">
                <FormLabel>User name</FormLabel>
                <Input type="text" placeholder="Enter a user name" />
              </FormControl>
              <FormControl id="phoneNumber">
                <FormLabel>Phone Number</FormLabel>
                <Input type="number" placeholder="Enter your phone number" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter a unique email address" />
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