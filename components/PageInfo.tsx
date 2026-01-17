'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';

// Icons
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function PageInfo() {
    return (
        <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#0f172a' }}>
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                {/* Hero */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
                            ภาษีเรื่องง่าย ปรึกษาได้ทุกเวลา
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'rgba(15,23,42,0.75)', mb: 3 }}>
                            เพื่อนคู่คิดด้านภาษีสำหรับทั้งบุคคลธรรมดาและนิติบุคคล มาพร้อมกับ <strong>AI Chatbot อัจฉริยะ</strong> ที่พร้อมตอบคำถามคุณตลอด 24 ชั่วโมง และทีมผู้เชี่ยวชาญที่พร้อมดูแลคุณ
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <Button
                                component={Link}
                                href="/chat"
                                variant="contained"
                                startIcon={<SmartToyIcon />}
                                sx={{ backgroundColor: '#1565c0', '&:hover': { backgroundColor: '#134a8a' } }}
                                size="large"
                            >
                                ทดลองใช้ Chat AI ฟรี
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<SupportAgentIcon />}
                                sx={{ borderColor: '#60a5fa', color: '#1565c0' }}
                                size="large"
                            >
                                ปรึกษาผู้เชี่ยวชาญ
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                width: '100%',
                                height: 320,
                                bgcolor: '#e8f2ff',
                                borderRadius: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <SmartToyIcon sx={{ fontSize: 80, color: '#1565c0', mb: 2 }} />
                            <Typography sx={{ color: '#0b4a83', fontWeight: 600, fontSize: '1.2rem' }}>
                                AI Tax Assistant
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
                                ตอบทุกข้อสงสัย แม่นยำ รวดเร็ว
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Features / Services */}
                <Box id="services" sx={{ mt: { xs: 8, md: 12 }, scrollMarginTop: '80px' }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                            บริการครบวงจรเพื่อคุณ
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                            ไม่ว่าคุณจะเป็นบุคคลธรรมดาหรือเจ้าของธุรกิจ เรามีโซลูชั่นที่เหมาะสมเพื่อช่วยให้การจัดการภาษีเป็นเรื่องง่าย
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {[
                            {
                                icon: <PersonIcon sx={{ fontSize: 40, color: '#1565c0' }} />,
                                title: 'ภาษีบุคคลธรรมดา',
                                desc: 'ช่วยวางแผนลดหย่อนภาษี และยื่นแบบ ภ.ง.ด. 90/91 ได้อย่างถูกต้อง',
                            },
                            {
                                icon: <BusinessIcon sx={{ fontSize: 40, color: '#1565c0' }} />,
                                title: 'ภาษีนิติบุคคล',
                                desc: 'คำแนะนำสำหรับ SME และบริษัทจำกัด เรื่องภาษีมูลค่าเพิ่ม หัก ณ ที่จ่าย และอื่นๆ',
                            },
                            {
                                icon: <SmartToyIcon sx={{ fontSize: 40, color: '#1565c0' }} />,
                                title: 'ปรึกษา AI Chatbot',
                                desc: 'ถาม-ตอบปัญหาภาษีเบื้องต้นได้ทันที ตลอด 24 ชม. ด้วยระบบ AI ที่เรียนรู้กฎหมายใหม่ล่าสุด',
                            },
                            {
                                icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#1565c0' }} />,
                                title: 'ทีมที่ปรึกษา',
                                desc: 'เคสซับซ้อนไม่ต้องกังวล ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษาเชิงลึก',
                            },
                        ].map((f) => (
                            <Grid item xs={12} sm={6} md={3} key={f.title}>
                                <Card sx={{ borderRadius: 4, height: '100%', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } }}>
                                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                                        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                                            {f.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a' }}>
                                            {f.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'rgba(15,23,42,0.75)' }}>
                                            {f.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* CTA strip */}
                <Box
                    sx={{
                        mt: { xs: 8, md: 12 },
                        p: { xs: 4, md: 6 },
                        background: 'linear-gradient(135deg, #1565c0 0%, #0b4a83 100%)',
                        borderRadius: 4,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 4,
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(21, 101, 192, 0.2)'
                    }}
                >
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                            ลองใช้ AI ช่วยจัดการภาษีวันนี่
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                            เริ่มต้นใช้งานฟรี หรือติดต่อทีมงานเพื่อโซลูชั่นที่ตอบโจทย์ธุรกิจคุณ
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Button
                            component={Link}
                            href="/chat"
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: 'white',
                                color: '#1565c0',
                                fontWeight: 700,
                                '&:hover': { backgroundColor: '#f5f5f5' }
                            }}
                        >
                            เริ่มแชทกับ AI
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                borderColor: 'rgba(255,255,255,0.5)',
                                color: 'white',
                                '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
                            }}
                        >
                            นัดหมายปรึกษา
                        </Button>
                    </Box>
                </Box>

                {/* Footer */}
                <Box sx={{ mt: 8, py: 4, textAlign: 'center', borderTop: '1px solid #e2e8f0', color: 'rgba(15,23,42,0.6)' }}>
                    <Typography variant="body2">© {new Date().getFullYear()} Modern Tax Assistant — เพื่อนคู่คิดภาษีของคุณ</Typography>
                </Box>
            </Container>
        </Box>
    );
}