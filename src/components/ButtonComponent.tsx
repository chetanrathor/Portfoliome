import { Button, } from '@mui/material';
import { ReactNode } from 'react';


interface Prop {
    children: ReactNode,
    handelClick: () => void
}

const sx = {}



const ButtonComponent = ({ children, handelClick }: Prop) => {

    return (

        <Button onClick={(e) => { e.preventDefault(); handelClick() }} variant='contained' sx={{ paddingX: '30px', paddingY: '15px' }}>{children}</Button>

    )
}



export default ButtonComponent
