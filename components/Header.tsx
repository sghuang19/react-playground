import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import Link from 'next/link'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Button color="inherit">
                    <Link href="/">Home</Link>
                </Button>
                <Button color="inherit">
                    <Link href="../app/about">About Me</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/contact">Contact</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
