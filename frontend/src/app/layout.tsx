import type { Metadata } from 'next'
import './globals.css'
import {Footer} from "@/components/Footer";
import {Flowbite} from "flowbite-react";
import React from "react";
import {customTheme} from "@/utils/theme.utils";


export const metadata: Metadata = {
    title: 'Title Goes Here',
    description: 'description goes here',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
    return (
        <html  lang="en" suppressHydrationWarning>

        <body>

        <Flowbite theme={{ theme: customTheme }}>
            {children}
            </Flowbite>
        </body>

        </html>
    )
}