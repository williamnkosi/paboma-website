import React from "react";
import {
  Flex,
  Button,
  Input,
  IconButton,
  Text,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineShoppingCart, MdOutlineAccountCircle } from "react-icons/md";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavBarDrawer from "@/components/navbar/nav-bar-drawer";
import NavBarButton from "./nav-bar-button";

type Props = {};

const NavBar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex bg="blue" w="100%" p={4} color="white">
      <NavBarDrawer isOpen={isOpen} onClose={onClose} />
      <Flex flex="2">
        <IconButton
          variant="outline"
          colorScheme="white"
          aria-label="Search database"
          onClick={onOpen}
          icon={<HamburgerIcon />}
          me={10}
        />

        <Text fontSize="2xl">Paboma Market Place</Text>
      </Flex>

      <Spacer />

      <Flex flex="1">
        <Input placeholder="Search" size="md" me={10} />
        <NavBarButton title="Login" icon={<MdOutlineShoppingCart />} />
        <NavBarButton title="Cart" icon={<MdOutlineShoppingCart />} />
      </Flex>
    </Flex>
  );
};

export default NavBar;
