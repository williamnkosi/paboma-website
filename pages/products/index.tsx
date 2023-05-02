import ProductListItem from "@/components/products/product-list-item";
import React from "react";
import { Flex } from "@chakra-ui/react";
type Props = {};

const index = (props: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default index;
