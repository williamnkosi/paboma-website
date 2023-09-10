import React from 'react'
import { Box, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';

type Props = {}

const categores = ["Agricultural Procducts", "Arts", "Books", "Children & Babies", "Clothing", "Electoronics", "Health & Beauty",
    "Footwear & Shoes",
    "Home & Decor",
    "Motor Vehicles Parts",
    "Office Equipment",
    "Sports wear"
]
const DropdownMenu = () => {
    return (
        <Menu>
            <MenuButton as={Button} colorScheme="white" variant='link'>
                Categories
            </MenuButton>
            <MenuList>
                {categores.map((item, index) => (
                    <>
                        <MenuItem color={'blue'} key={index}>{item}</MenuItem>
                        <MenuDivider />
                    </>
                ))}
            </MenuList>
        </Menu>
    );
};

export default DropdownMenu;