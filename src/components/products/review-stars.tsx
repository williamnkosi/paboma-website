'use client'
import React from "react";
import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
type Props = {
  rating: number;
  reviewCount: number;
};

const ReviewStars = ({ rating, reviewCount }: Props) => {
  return (
    <Box display="flex" mt="2" alignItems="center">
      {Array(rating)
        .fill("")
        .map((_, i) => (
          <StarIcon key={i} color={i < rating ? "teal.500" : "gray.300"} />
        ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {reviewCount} reviews
      </Box>
    </Box>
  );
};

export default ReviewStars;
