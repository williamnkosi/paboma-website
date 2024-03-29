
import React from "react";
import { Flex } from "@chakra-ui/react";
import ProductListItem from "@/src/components/products/product-list-item";
type Props = {};

const index = (props: Props) => {
  return (

    <Flex p={16} gap="12">
      <ProductListItem
        imageUrl={""}
        title={"47 Area House"}
        shortDescription={"This house is location in 47"}
        rating={4}
        reviewCount={130}
        price={"123.45 "}
      ></ProductListItem>
      <ProductListItem
        imageUrl={""}
        title={"47 Area House"}
        shortDescription={"This house is location in 47"}
        rating={4}
        reviewCount={130}
        price={"123.45 "}
      ></ProductListItem>
      <ProductListItem
        imageUrl={""}
        title={"47 Area House"}
        shortDescription={"This house is location in 47"}
        rating={4}
        reviewCount={130}
        price={"123.45 "}
      ></ProductListItem>
    </Flex>

  );
};

export default index;
