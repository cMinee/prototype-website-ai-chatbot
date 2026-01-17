'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function Navbar() {
    const reloadpage = () => {
        window.location.href = '/';
    };
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // };
    const scrollToServices = () => {
        const section = document.getElementById('services');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: '#ffffff',
                borderBottom: '1px solid',
                borderColor: 'divider',
                color: 'text.primary'
            }}
        >
            <Toolbar>
                {/* Left Side: Register and Login */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            mr: 1
                        }}
                    >
                        LOGO
                    </Typography>

                    {/* Home */}
                    <Button color="inherit" onClick={reloadpage}>
                        หน้าแรก
                    </Button>

                    {/* Services */}
                    <Button color="inherit" onClick={scrollToServices}>
                        บริการของเรา
                    </Button>

                    {/* Chat AI */}
                    <Button
                        component={Link}
                        href="/chat"
                        color="inherit"
                    >
                        เมนู Chat AI
                    </Button>
                </Box>

                {/* Spacer */}
                <Box sx={{ flexGrow: 1 }} />

                {/* Right Side: Register and Login */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button color="inherit">สมัครสมาชิก</Button>
                    <Button variant="outlined" color="primary">เข้าสู่ระบบ</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
