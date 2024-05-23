import React from 'react'
import { Container, Box, Typography, TextField, Button } from '@mui/material'

const Page = () => {
    return (
        <>
            <Container>
                <Box my={4}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Contact Me
                    </Typography>
                    <form noValidate autoComplete="off">
                        <TextField label="Name" fullWidth margin="normal" />
                        <TextField label="Email" fullWidth margin="normal" />
                        <TextField
                            label="Message"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Send
                        </Button>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default Page
