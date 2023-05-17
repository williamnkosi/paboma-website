import React from "react";
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import { selectError, selectStatus, signInUser } from '@/state/userSlice';
import { useAppSelector, useAppDispatch } from '../../state/app-hooks'
import ErrorMessage from "@/components/error-message";
type Props = {};

type FormData = {
  email: string,
  password: string
}



const Signin = (props: Props) => {
  const dispatch = useAppDispatch()
  const errorMessage = useAppSelector(selectError)
  const userSliceStatus = useAppSelector(selectStatus)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  function onSubmit(values: FormData) {
    dispatch(signInUser(values as { email: string; password: string }))
  }

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" bg="gray.100">
      <Box width="400px" borderWidth="1px" borderRadius="md" boxShadow="lg" p={8} bg="white">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Login
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}  >
          <VStack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter email address"
                {...register("email", { required: 'Email is required' })} />
              <FormErrorMessage> {errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter password"  {...register("password", { required: 'Password is requireed' })} />
              <FormErrorMessage> {errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
            {
              errorMessage ?
                <ErrorMessage message={errorMessage.message} /> : <></>
            }
            <Button colorScheme="blue" width="full" type="submit">
              Sign In
            </Button>
            <Button colorScheme="blue" width="full">
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Signin;

