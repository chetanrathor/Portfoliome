import { Button, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactNode } from 'react'
import { theme } from '../theme';


interface Prop {
    children:ReactNode
}

const sx ={}



const ButtonComponent = ({children}: Prop) => {
 
    return (
       
            <Button variant='contained' sx={{paddingX:'30px',paddingY:'15px' }}>{children}</Button>
       
    )
}



export default ButtonComponent
