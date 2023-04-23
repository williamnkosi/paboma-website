import React from "react";
import { Box, Image, Flex, Button, Spacer } from "@chakra-ui/react";
import ReviewStars from "./review-stars";
import ShortDescription from "./short-description";

type Props = {
  imageUrl: string;
  title: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  price: string;
};

const ProductListItem = ({
  imageUrl,
  title,
  shortDescription,
  rating,
  reviewCount,
  price,
}: Props) => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",

    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Flex>
          <Box display="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {title}
            </Box>
          </Box>
          <Spacer />
          <Box>
            {price}
            <Box as="span" color="gray.600" fontSize="sm">
              MWK
            </Box>
          </Box>
        </Flex>

        <ShortDescription description={shortDescription} />
        <ReviewStars rating={rating} reviewCount={reviewCount} />
        <Button colorScheme="teal" variant="solid">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductListItem;
