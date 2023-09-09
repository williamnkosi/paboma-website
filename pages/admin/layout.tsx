import OrdersSection from '@/components/admin/orders-section/orders-section';
import ProdcutsBox from '@/components/admin/products/products-box';
import SideBar from '@/components/admin/side-bar';
import { AdminSideBarSections } from '@/components/admin/types';
import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'



export default function AdminLayout({
    children, }: { children: React.ReactNode }
) {
    return (
        <>
            <h1>Testingsdftggsdgfesrgg</h1>
            {children}
        </>
    )
}



// type Props = {
//     children: React.ReactNode;
// };

// const AdminLayout = ({ children }: Props) => {
//     const [section, setSection] = useState<AdminSideBarSections>(AdminSideBarSections.orders)
//     const renderLayout = () => {
//         switch (section) {
//             case AdminSideBarSections.orders: {
//                 return (<OrdersSection />)
//             } case AdminSideBarSections.product: {
//                 return (<ProdcutsBox />)
//             }
//         }
//     }


//     const onSideBarButtonClick = (section: AdminSideBarSections) => {
//         switch (section) {
//             case AdminSideBarSections.orders: {
//                 setSection(section)
//             }
//             case AdminSideBarSections.product: {
//                 setSection(section)
//             }
//         }
//     }
//     return (
//         <>
//             <Flex
//                 maxW='100%' bg='gray.200'
//                 flexDirection={'row'}
//             >
//                 <SideBar onButtonClick={onSideBarButtonClick} />
//                 <Flex width={'100%'} direction={'column'}>
//                     <Box borderWidth='1px' height={'50px'} width={'100%'} bg={'white'} mb={8}></Box>
//                     {children}
//                 </Flex>
//             </Flex>

//         </>

//     )
// }

// export default AdminLayout