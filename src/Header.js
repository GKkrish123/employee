import { Home, Settings } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Button variant="outlined" color="inherit" onClick={() => navigate("/employee")} sx={{ mr: 45 }} startIcon={<Home />}>Home</Button>
                    <Typography variant="h3" color="inherit" sx={{ mr: 40 }}>
                        EMPLOYEE PORTAL
                    </Typography>
                    <Button fluid="right" color="inherit" variant="outlined" onClick={() => navigate("/settings")} startIcon={<Settings />}>Settings</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header
