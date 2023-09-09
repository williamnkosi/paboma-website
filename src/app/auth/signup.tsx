import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import { useAppSelector, useAppDispatch } from '../../../state/app-hooks'
import { selectError, selectStatus, selectUserData, signUpUser } from '@/state/userSlice';
'use client'

import { LoadingStatus } from '@/models/loading-status.enum';
import { isValidEmail, isValidPassword } from '@/utils/form-validators';
import router from 'next/router';
import ErrorMessage from '@/src/components/error-message';
import LoadingSpinner from '@/src/components/loading-spinner';
type Props = {}

type FormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  gender: string;
  phoneNumber: string;
  email: string;
  password: string;
}

const Signup = (props: Props) => {
  const dispatch = useAppDispatch()
  const errorMessage = useAppSelector(selectError)
  const userSliceStatus = useAppSelector(selectStatus)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();


  function onSubmit(values: any) {
    dispatch(signUpUser(values as User))
  }


  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" bg="gray.100">
      <Box width="400px" borderWidth="1px" borderRadius="md" boxShadow="lg" p={8} bg="white">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Signup
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}  >
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input type="text" placeholder="Enter your first name."
                {...register("firstName", { required: 'First name is required' })} />
              <FormErrorMessage> {errors.firstName && errors.firstName.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="lastName" isInvalid={!!errors.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" placeholder="Enter your last name."  {...register("lastName", { required: 'Your last name is required' })} />
              <FormErrorMessage> {errors.lastName && errors.lastName.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="userName" isInvalid={!!errors.userName}>
              <FormLabel>User name</FormLabel>
              <Input type="text" placeholder="Enter a user name" {...register("userName", { required: 'Your user name is required' })} />
              <FormErrorMessage> {errors.userName && errors.userName.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="gender" isInvalid={!!errors.userName}>
              <FormLabel>Gender</FormLabel>
              <Input type="text" placeholder="Enter your gender" {...register("gender", { required: 'Your gender is required' })} />
              <FormErrorMessage> {errors.gender && errors.gender.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="phoneNumber" isInvalid={!!errors.phoneNumber}>
              <FormLabel>Phone Number</FormLabel>
              <Input type="number" placeholder="Enter your phone number"  {...register("phoneNumber", { required: 'Your phone number is required' })} />
              <FormErrorMessage> {errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter a unique email"  {...register("email", { required: 'Your email is required' })} />
              <FormErrorMessage> {errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.email}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter password"  {...register("password", { required: 'Your password is required' })} />
              <FormErrorMessage> {errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
            {
              userSliceStatus == LoadingStatus.Loading ? <LoadingSpinner /> : <></>
            }

            {
              errorMessage ?
                <ErrorMessage message={errorMessage.message} /> : <></>
            }

            <Button colorScheme="blue" width="full" type="submit" >
              Sign Up
            </Button>

          </VStack>
        </form>
      </Box>
    </Flex >
  );
}

export default Signup