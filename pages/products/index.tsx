import ProductListItem from "@/components/products/product-list-item";
import React, { useState } from "react";
import { Flex, Grid, GridItem, Radio, RadioGroup, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
type Props = {};
const categores = ["Agricultural Procducts", "Arts", "Books", "Children & Babies", "Clothing", "Electoronics", "Health & Beauty",
  "Footwear & Shoes",
  "Home & Decor",
  "Motor Vehicles Parts",
  "Office Equipment",
  "Sports wear"
]
const locations = ["Lilongwe", "Mzuzu", "Blantyre"]
const index = (props: Props) => {
  const [value, setValue] = useState('1')
  return (
    <div>
      <Grid
        h='200px'
        padding={10}
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem colSpan={1} >
          <Flex flex={1} direction={'column'}>
            <Text mb={4} as='b'>Categories</Text>
            <RadioGroup onChange={setValue} value={value} mb={8}>
              <Stack direction='column'>
                {categores.map((item, index) => (
                  <>
                    <Radio color={'blue'} key={index} value={index.toString()}>{item}</Radio >

                  </>
                ))}

              </Stack>
            </RadioGroup>

            <Text mb={4} as='b'>Locations</Text>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction='column'>
                {locations.map((item, index) => (
                  <>
                    <Radio color={'blue'} key={index} value={index.toString()}>{item}</Radio >

                  </>
                ))}

              </Stack>
            </RadioGroup>
          </Flex>
        </GridItem>
        <GridItem colSpan={4} >
          <Text mb={4}>Search for "testiong" </Text>
          <Tabs>
            <TabList mb={4}>
              <Tab>All Products</Tab>
              <Tab>Popular</Tab>
              <Tab>Latest</Tab>
              <Tab>Best Selling</Tab>
              <Tab>Discount</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex justify="space-evenly" height="100%" gap={10} >
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
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>

      </Grid>
    </div>
  );
};

export default index;

