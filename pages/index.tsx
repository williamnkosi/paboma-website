import Image from "next/image";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import NavBar from "@/components/navbar/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const testing = "testing";
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  );
}
