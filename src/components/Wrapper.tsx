import { Grid } from '@mui/material'
import React, { ReactNode } from 'react'
interface Prop {
    children: ReactNode
}

const Wrapper = ({ children }: Prop) => {
    return (
        <div>
            <Grid maxWidth={'1140px'} margin={'auto'}>
                {children}
            </Grid>
        </div>
    )
}

export default Wrapper
