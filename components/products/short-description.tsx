import React from "react";
import { Box } from "@chakra-ui/react";
type Props = {
  description: string;
};

const ShortDescription = ({ description }: Props) => {
  return (
    <Box mt="1" as="h4" color={"gray.700"}>
      {description}
    </Box>
  );
};

export default ShortDescription;
