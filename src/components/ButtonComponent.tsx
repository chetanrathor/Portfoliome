import { Button, } from '@mui/material';
import { ReactNode } from 'react';


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
