export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <h2>Testing this has worked</h2>
            <body>{children}</body>
        </html>
    )
}