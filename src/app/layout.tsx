'use client'
import { Provider } from "react-redux";
import { store } from "@/state/store";
import { ChakraProvider } from "@chakra-ui/react";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body><Provider store={store}><ChakraProvider>{children}</ChakraProvider></Provider></body>
        </html>
    )
}