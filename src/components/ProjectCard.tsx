import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { theme } from '../theme';

export const ProjectCard = ({ description, image, link, name }: PropType) => {
    return (
        <Card sx={{ width: 345, height: 400 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={`${process.env.PUBLIC_URL}/images/${image}`}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color={theme.palette.secondary.main}>
                    {name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <a href={link}>
                    <Button size="small">
                        Learn More
                    </Button>
                </a>

            </CardActions>
        </Card>
    );
}


interface PropType {
    image: string,
    name: string,
    description: string,
    link: string
}