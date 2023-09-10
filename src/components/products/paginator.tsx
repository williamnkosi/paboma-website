import { Box, Button, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";


type props = {
    currentPage: number,
    totalPages: number,
    onPageChange: (currentPage: number) => void
}
const Pagination = ({ currentPage, totalPages, onPageChange }: props) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <Flex align="center" justify="center" py={4}>
            <Button
                leftIcon={<ChevronLeftIcon />}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                variant='ghost'
                justifyContent={'center'}
            >

            </Button>
            <Box mx={2} fontWeight="bold">
                {currentPage} / {totalPages}
            </Box>
            <Button
                rightIcon={<ChevronRightIcon />}
                onClick={handleNextPage}
                variant='ghost'
                disabled={currentPage === totalPages}
            >

            </Button>
        </Flex>
    );
};

export default Pagination;