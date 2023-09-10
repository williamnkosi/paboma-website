import { Box, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const FavoriteCircle = () => {
    return (
        <Box
            zIndex={99}

            width="30px"
            height="30px"
            borderRadius="50%"
            backgroundColor="pink.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Icon as={FaHeart} color="white" boxSize={4} />
        </Box>
    );
};

export default FavoriteCircle;