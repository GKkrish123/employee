import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <React.Fragment>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        Copyright and licensed by Gokulakrishnan © 2021
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Footer
