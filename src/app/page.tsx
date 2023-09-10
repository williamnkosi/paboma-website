'use client'

import { Inter } from "next/font/google";
import { Box, Divider, Flex, SimpleGrid, Text, Image, UnorderedList, ListItem, } from "@chakra-ui/react";
import CardList from "../components/home/card-list";
import Carousel from "../components/home/carousel";
import ProductList from "../components/home/products-list";
import { useState, useEffect } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <Carousel />
      <Flex mt={16} mb={16} direction={'column'} alignItems='center' justifyContent="center" >
        <Text fontSize="2xl" mb={8}>Shop Our Top Categories</Text>
        <CardList />
      </Flex>

      <Flex direction={'column'} alignItems='center' justifyContent="center" >
        <Text fontSize="2xl" mb={8} >New Arrivals</Text>
        <ProductList />
      </Flex>

      <Flex direction={'column'} alignItems='center' justifyContent="center" >
        <Text fontSize="2xl" mb={8} >Top Trending</Text>
        <ProductList />
      </Flex>

      <Divider m={8} />

      <SimpleGrid columns={[2, null, 3]} spacing='40px' margin={16}>
        <Box >
          <Image mb={4} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" loading="lazy" alt="" className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti doloribus sed molestias sint vero omnis tempore rerum temporibus quaerat earum atque ipsum laudantium doloremque, placeat expedita odit unde natus perspiciatis!</p>

          <Text mb={4}>Accepted Payments</Text>
          <Flex gap={3}>
            <Image src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png"} alt={"testing"} />
            <Image src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png"} alt={"testing"} />
            <Image src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png"} alt={"testing"} />
            <Image src={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png"} alt={"testing"} />


          </Flex>
        </Box>
        <Box >
          <Flex direction={'column'} alignItems='center'  >

            <Text>About Us</Text>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Flex>


        </Box>
        <Box>
          <Flex direction={'column'} alignItems='center'  >
            <Text>Help</Text>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Flex>
        </Box>
      </SimpleGrid>
    </>)
    ;
}

