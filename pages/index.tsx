import Image from "next/image";
import { Inter } from "next/font/google";
import { ChakraProvider, Flex, Text } from "@chakra-ui/react";

import NavBar from "@/components/navbar/nav-bar";
import CardList from "@/components/home/card-list";
import ProductList from "@/components/home/products-list";
import Carousel from "@/components/home/carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const testing = "testing";
  return <>
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

  </>;
}
