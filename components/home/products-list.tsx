const categores = ["Agricultural Procducts", "Arts", "Books", "Children & Babies", "Clothing", "Electoronics",

]
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import ProductListItem from '../products/product-list-item';
const ProductList = () => {
    const cards = [
        { title: 'Card 1', description: 'Description 1' },
        { title: 'Card 2', description: 'Description 2' },
        { title: 'Card 3', description: 'Description 3' },
        { title: 'Card 4', description: 'Description 4' },
    ];

    return (
        <SimpleGrid columns={{ md: 2, lg: 3 }} spacing={8}>
            <ProductListItem
                imageUrl={""}
                title={"47 Area House"}
                shortDescription={"This house is location in 47"}
                rating={4}
                reviewCount={130}
                price={"123.45 "}
            ></ProductListItem>
            <ProductListItem
                imageUrl={""}
                title={"47 Area House"}
                shortDescription={"This house is location in 47"}
                rating={4}
                reviewCount={130}
                price={"123.45 "}
            ></ProductListItem>
            <ProductListItem
                imageUrl={""}
                title={"47 Area House"}
                shortDescription={"This house is location in 47"}
                rating={4}
                reviewCount={130}
                price={"123.45 "}
            ></ProductListItem>
        </SimpleGrid>
    );
};

export default ProductList;
