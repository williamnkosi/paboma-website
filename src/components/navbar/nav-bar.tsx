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
import { RiUserLine } from "react-icons/ri"
import { HamburgerIcon } from "@chakra-ui/icons";
import NavBarDrawer from "@/components/navbar/nav-bar-drawer";
import NavBarButton from "./nav-bar-button";
import { selectUserData } from '@/state/userSlice';
import { useAppSelector } from "@/state/app-hooks";
import router from "next/router";
import DropdownMenu from "../home/drop-down-menu";
import SearchBar from "../search/searchbar";
type Props = {};

const NavBar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userData = useAppSelector(selectUserData)
  return (
    <Flex bg="#003d29" w="100%" p={4} color="white">
      <NavBarDrawer isOpen={isOpen} onClose={onClose} />
      <Flex flex="2" alignItems='center' gap={8} >
        <IconButton
          variant="outline"
          colorScheme="white"
          aria-label="Search database"
          onClick={onOpen}
          icon={<HamburgerIcon />}
        />
        <Text as='b' fontSize="2xl" onClick={() => router.push('/')} >Paboma Market Place</Text>
        <DropdownMenu />
        <Text as='b' onClick={() => router.push('/')} >Deals</Text>
        <Text as='b' onClick={() => router.push('/')} >Whats New</Text>
      </Flex>
      <Spacer />
      <SearchBar />
      <Spacer />
      <Flex flex="1" alignItems='start'>
        {
          userData ? <NavBarButton title={"Hello " + userData.firstName} icon={<RiUserLine />} /> : <NavBarButton title="Login" icon={<RiUserLine />} onClick={() => router.push('/auth/signin')} />
        }
        <NavBarButton title="Cart" icon={<MdOutlineShoppingCart />} />
      </Flex>
    </Flex>
  );
};

export default NavBar;
