import { Input, IconButton, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Input placeholder="Search..." colorScheme="white" focusBorderColor='white' _placeholder={{ opacity: 1, color: 'inherit' }} />
            <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                variant="outline"
            />
        </Stack>
    );
};

export default SearchBar;