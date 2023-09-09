
import React from "react";
import { Box, Image, Flex, Button, Spacer } from "@chakra-ui/react";
import ReviewStars from "./review-stars";
import ShortDescription from "./short-description";
import ProductNamePrice from "./product-name-price";
import Link from "next/link";
import Router from "next/router";

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
    <Link href={'/product/1'}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} className="transform hover:scale-110 transition-transform duration-300" />

        <Flex p="6" direction={"column"} gap={4}>
          <ProductNamePrice
            title={property.title}
            price={property.formattedPrice}
          />

          <ShortDescription description={shortDescription} />
          <ReviewStars rating={rating} reviewCount={reviewCount} />
          <Button colorScheme="teal" variant="solid">
            Add to Cart
          </Button>
          <Link href="/product/asdf">
            <button>Go to Another Page</button>
          </Link>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductListItem;
