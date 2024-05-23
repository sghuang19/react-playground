// src/components/CardOverview.tsx
import React from 'react'
import { Box, Card, CardContent, Typography, Grid } from '@mui/material'
import Link from 'next/link'

interface CardOverviewProps {
    cards: Array<{ id: number; title: string; content: string; url: string }>
}

const CardOverview: React.FC<CardOverviewProps> = ({ cards }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={2}
                sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
            >
                {cards.map((card) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={card.id}
                        sx={{ display: 'inline-block' }}
                    >
                        <Link href={card.url} passHref>
                            <Card sx={{ cursor: 'pointer' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {card.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default CardOverview
