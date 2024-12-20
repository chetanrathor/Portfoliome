import { Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import Seprator from './Seprator'


interface Prop {
    clientImage: string,
    review: string,
    name: string,
    isPublicImage: boolean
    maxWidth: string
}

const ClientReview = ({ clientImage, name, review, isPublicImage,maxWidth }: Prop) => {
    return (
        <div>
            <Grid gap={3} maxWidth={maxWidth} container direction={'column'} alignItems={'center'} sx={{ backgroundColor: theme.palette.warning.main, paddingY: '36px',paddingX:'48px', borderRadius:'10px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <Grid item>

                    <img alt='' src={`${process.env.PUBLIC_URL}/images/quotation.png`} width={'19px'} height={'19px'}></img>
                </Grid>
                <Grid item>

                    <img alt='' style={{borderRadius:'50%',border:`3px solid ${theme.palette.primary.main}`}}  src={`${(isPublicImage ? process.env.PUBLIC_URL + '/images/' + clientImage : clientImage)}`} width={'68px'} height={'68px'}></img>
                </Grid>
                <Typography variant='h5' color={theme.palette.secondary.main}>{name}</Typography>
                <Typography  textAlign={'center'} variant='subtitle1' color={theme.palette.success.main}>
                    {review}</Typography>
                <Seprator width='27.9'></Seprator>
                <Grid item>
                    <Typography variant='subtitle1' color={'#35373A'}>
                        {name}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default ClientReview
