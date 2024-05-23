'use client'

import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

const theme = createTheme()
// TODO: Customize theme

const Layout = ({ children }: { children: React.ReactNode }) => {
    const title = "Samuel's Website"
    return (
        <html lang="en">
            <head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default Layout
