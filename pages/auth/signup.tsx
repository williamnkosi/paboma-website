import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from '../../state/app-hooks'
import { fetchPosts } from '@/state/userSlice';
type Props = {}

type FormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

const Signup = (props: Props) => {
  const dispatch = useAppDispatch()


  const count = useAppSelector((state) => state.user.user)

  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: ""

  });
  const [errors, setErrors] = useState<FormValues>({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleClick = () => {

    console.log("this one")
    dispatch(fetchPosts())
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("tesint")
    await dispatch(fetchPosts())

    // perform validation
    const newErrors: FormValues = {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      email: "",
      password: ""
    };

    if (!values.email) {
      newErrors.email = "Email is required";
    }
    if (!values.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    if (!newErrors.email && !newErrors.password) {
      // form is valid, perform submission
    }


  }
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" bg="gray.100">
      <Box width="400px" borderWidth="1px" borderRadius="md" boxShadow="lg" p={8} bg="white">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Signup
        </Text>
        <form onSubmit={handleSubmit}  >
          <VStack spacing={4}>
            <FormControl id="firstName" isInvalid={true}>
              <FormLabel>First Name</FormLabel>
              <Input type="text" placeholder="Enter your first name." onChange={handleChange} />
            </FormControl>
            <FormControl id="lastName" >
              <FormLabel>Last Name</FormLabel>
              <Input type="text" placeholder="Enter your last name." onChange={handleChange} />
            </FormControl>
            <FormControl id="userName" >
              <FormLabel>User name</FormLabel>
              <Input type="text" placeholder="Enter a user name" onChange={handleChange} />
            </FormControl>
            <FormControl id="phoneNumber" >
              <FormLabel>Phone Number</FormLabel>
              <Input type="number" placeholder="Enter your phone number" onChange={handleChange} />
            </FormControl>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter a unique email" onChange={handleChange} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" >
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter password" onChange={handleChange} />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button colorScheme="blue" width="full" type="submit">
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex >
  );
}

export default Signup