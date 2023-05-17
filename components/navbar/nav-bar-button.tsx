import React from "react";
import { Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
type Props = {
  title: string;
  icon: any;
  onClick?: () => void
};

const NavBarButton = ({ title, icon, onClick }: Props) => {
  return (
    <Button variant="ghost" leftIcon={icon} colorScheme="white" mr={4} onClick={onClick}>
      {title}
    </Button>
  );
};

export default NavBarButton;
