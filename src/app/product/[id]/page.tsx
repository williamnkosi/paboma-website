'use client'
import React from "react";
import { ParsedUrlQuery, encode } from "querystring";
import { Box, Flex, Image, Spacer, Text, Button, Divider } from "@chakra-ui/react";
import ReviewStars from "@/src/components/products/review-stars";
import QuantityStepper from "@/src/components/quantity-stepper";

type Props = {};

const ProductDetail = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <Flex m={16} justifyContent="center" justifyItems={"flex-start"} w="100%">
        <Flex marginRight={8} flexDirection="column">
          <Box width={720} maxWidth={720}>
            <Image src={"https://bit.ly/2Z4KKcF"} alt={"Testing"} />
          </Box>
          <Flex justifyContent="space-between" marginTop={4}>
            <Image width={150} maxWidth={150} src={"https://bit.ly/2Z4KKcF"} alt={"Testing"} />
            <Image width={150} maxWidth={150} src={"https://bit.ly/2Z4KKcF"} alt={"Testing"} />
            <Image width={150} maxWidth={150} src={"https://bit.ly/2Z4KKcF"} alt={"Testing"} />
            <Image width={150} maxWidth={150} src={"https://bit.ly/2Z4KKcF"} alt={"Testing"} />
          </Flex>
        </Flex>

        <Flex justifySelf={"start"} direction={"column"} marginLeft={8}>
          <Text
            fontSize={{ base: "24px", md: "40px", lg: "56px" }}
            fontWeight={"bold"}
          >
            Airpods - Max
          </Text>

          <Text fontSize={{ base: "18px" }} fontWeight={"semibold"}>
            This is for testing the description for the new products detail page
          </Text>
          <ReviewStars rating={4} reviewCount={123} />
          <Divider marginTop={4} marginBottom={4} />

          <Text fontSize={{ base: "18px" }} fontWeight={"bold"}>
            12,000 MWK
          </Text>
          <Divider marginTop={4} marginBottom={4} />

          <QuantityStepper onChange={undefined} />
          <Button colorScheme="teal" variant="solid" marginTop={4}>
            Add to Cart
          </Button>
          <Divider marginTop={4} marginBottom={4} />
        </Flex>
      </Flex>
    </>
  );
};
export default ProductDetail;
