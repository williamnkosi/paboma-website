import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from '../../state/app-hooks'
import { selectError, selectStatus, selectUserData, signUpUser } from '@/state/userSlice';
import ErrorMessage from '@/components/error-message';
import LoadingSpinner from '@/components/loading-spinner';
import { LoadingStatus } from '@/models/loading-status.enum';
import { isValidEmail, isValidPassword } from '@/utils/form-validators';
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

  const errorMessage = useAppSelector(selectError)
  const userSliceStatus = useAppSelector(selectStatus)

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
    console.log(values)
  }


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // perform validation
    const newErrors: FormValues = {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      email: "",
      password: ""
    };

    if (!values.firstName) {
      newErrors.firstName = "Your first name is required";
    }
    if (!values.lastName) {
      newErrors.lastName = "Your last name is required";
    }
    if (!values.userName) {
      newErrors.userName = "Your user name is required";

    }
    if (!values.phoneNumber) {
      newErrors.phoneNumber = "Your phone number is required";
    }

    if (!values.email) {
      newErrors.email = "Your email is required";
      if (!isValidEmail(values.password)) {
        newErrors.password = "You entered an invalid email"
      }
    }
    if (!values.password) {
      newErrors.password = "Your password is required";
      if (!isValidPassword(values.password)) {
        newErrors.password = "Your password doesn't meet the requirements, Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      }

    }

    console.log(values)
    setErrors(newErrors);
    if (!newErrors.firstName && !newErrors.lastName && !newErrors.phoneNumber && !newErrors.email && !newErrors.email && !newErrors.password) {
      dispatch(signUpUser(values as User))
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
            <FormControl id="firstName" isInvalid={!!errors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input type="text" placeholder="Enter your first name." onChange={handleChange} />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl id="lastName" isInvalid={!!errors.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" placeholder="Enter your last name." onChange={handleChange} />
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl id="userName" isInvalid={!!errors.userName}>
              <FormLabel>User name</FormLabel>
              <Input type="text" placeholder="Enter a user name" onChange={handleChange} />
              <FormErrorMessage>{errors.userName}</FormErrorMessage>
            </FormControl>
            <FormControl id="phoneNumber" isInvalid={!!errors.phoneNumber}>
              <FormLabel>Phone Number</FormLabel>
              <Input type="number" placeholder="Enter your phone number" onChange={handleChange} />
              <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter a unique email" onChange={handleChange} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.email}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter password" onChange={handleChange} />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            {
              userSliceStatus == LoadingStatus.Loading ? <LoadingSpinner /> : <></>
            }

            {
              errorMessage ?
                <ErrorMessage message={errorMessage.message} /> : <></>
            }

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