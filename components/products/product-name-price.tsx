import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  price: string;
};

const ProductNamePrice = ({ title, price }: Props) => {
  return (
    <Flex>
      <Box display="flex">
        <Box
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="sm"
          textTransform="uppercase"
        >
          {title}
        </Box>
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
