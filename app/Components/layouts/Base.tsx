// app/Components/layouts/Base.tsx

import React, { ReactNode } from 'react'

export default function Base(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Nisru</title>
                <script src="https://kit.fontawesome.com/3923fa72b9.js" crossOrigin="anonymous" />
                <link
                    href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                    rel="stylesheet"
                />
            </head>
            <body>{props.children}</body>
        </html>
    )
}
