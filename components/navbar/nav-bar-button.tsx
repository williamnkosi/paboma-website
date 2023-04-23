import React from "react";
import { Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
type Props = {
  title: string;
  icon: any;
};

const NavBarButton = ({ title, icon }: Props) => {
  return (
    <Button variant="ghost" leftIcon={icon} colorScheme="white" mr={4}>
      {title}
    </Button>
  );
};

export default NavBarButton;
