import { Grid } from '@mui/material'
import React, { ReactNode } from 'react'

interface Prop {
    children: ReactNode,
    shouldVisibleBackgroundImage:boolean,
    backgroundColor?:string,
    paddingY?:number | string

}

const Container = ({ children,shouldVisibleBackgroundImage,backgroundColor,paddingY }: Prop) => {
    const getBackgroundImage = ()=>{
        if (shouldVisibleBackgroundImage) {
            return `url(${process.env.PUBLIC_URL}'/images/services_bg.png')`
        }else{
            return ''
        }
    }

    return (
        <div>
            <Grid paddingY={paddingY} sx={{ backgroundImage: getBackgroundImage(), backgroundColor, backgroundPosition: '597px 201.295px', backgroundSize: ' 68.906% 63.017%',backgroundRepeat:'no-repeat', }} >{children} </Grid>
            {/* <Grid sx={{backgroundColor:'#FEFAFA'}} >{children} </Grid> */}
        </div>
    )
}

export default Container

