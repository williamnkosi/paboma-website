import React from "react";
import { Box } from "@chakra-ui/react";
type Props = {
  description: string;
};

const ShortDescription = ({ description }: Props) => {
  return (
    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
      {description}
    </Box>
  );
};

export default ShortDescription;
