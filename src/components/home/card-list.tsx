const categores = ["Agricultural Procducts", "Arts", "Books", "Children & Babies", "Clothing", "Electoronics",

]
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
const CardList = () => {
    const cards = [
        { title: 'Card 1', description: 'Description 1' },
        { title: 'Card 2', description: 'Description 2' },
        { title: 'Card 3', description: 'Description 3' },
        { title: 'Card 4', description: 'Description 4' },
    ];

    return (
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={8}>
            {categores.map((item, index) => (
                <Box height={300} width={230} key={index} bg="gray.200" p={4} rounded="md">
                    <Text fontWeight="bold">{item}</Text>

                </Box>
            ))}
        </SimpleGrid>
    );
};

export default CardList;
