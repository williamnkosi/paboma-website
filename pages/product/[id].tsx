import React from "react";
import { useRouter } from "next/router";
import { ParsedUrlQuery, encode } from "querystring";
import { Box, Flex, Image, Spacer, Text, Button } from "@chakra-ui/react";
import ReviewStars from "@/components/products/review-stars";
import QuantityStepper from "@/components/quantity-stepper";

type Props = {};

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Flex m={16} justifyContent="center" justifyItems={"flex-start"} w="100%">
        <Flex>
          <Box width={720} height={500} maxWidth={720}>
            <Image src={"https://bit.ly/2Z4KKcF"} alt={"Testing"} />
          </Box>
          <Flex></Flex>
        </Flex>

        <Flex justifySelf={"start"} direction={"column"}>
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

          <Text fontSize={{ base: "18px" }} fontWeight={"bold"}>
            12,000 MWK
          </Text>
          <p>Quantity section</p>
          <QuantityStepper />
          <Button colorScheme="teal" variant="solid">
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default ProductDetail;
