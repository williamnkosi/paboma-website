import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  price: string;
};

const ProductNamePrice = ({ title, price }: Props) => {
  return (
    <Flex>
      <Box display="flex">
        <Text>  {title}</Text>
      </Box>
      <Spacer />
      <Box fontWeight="semibold">
        {price}
        <Box as="span">MWK</Box>
      </Box>
    </Flex>
  );
};

export default ProductNamePrice;
