'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function PricingPage() {
    const tiers = [
        {
            title: 'Free',
            subtitle: 'สำหรับผู้เริ่มต้น',
            price: '0',
            description: [
                'ถาม AI ได้ 10 ครั้ง/วัน',
                'ความเร็วมาตรฐาน',
                'คำนวณภาษีเบื้องต้น',
                'เข้าถึงบทความทั่วไป',
            ],
            notIncluded: [
                'บันทึกประวัติการแชท',
                'ปรึกษาผู้เชี่ยวชาญ',
                'เอกสาร Template ภาษีธุรกิจ',
            ],
            buttonText: 'เริ่มต้นใช้งานฟรี',
            buttonVariant: 'outlined' as const,
        },
        {
            title: 'Pro',
            subheader: 'ยอมนิยม',
            subtitle: 'สำหรับบุคคลทั่วไป/ฟรีแลนซ์',
            price: '299',
            description: [
                'ถาม AI ได้ไม่จำกัด',
                'ความเร็วสูง (Fast Response)',
                'บันทึกประวัติการแชทได้',
                'ระบบคำนวณภาษีขั้นสูง (ลดหย่อนละเอียด)',
                'ดาวน์โหลดแบบฟอร์ม ภ.ง.ด.',
            ],
            userId: 'pro',
            notIncluded: [
                'ปรึกษาผู้เชี่ยวชาญส่วนตัว',
                'ระบบจัดการภาษีนิติบุคคล',
            ],
            buttonText: 'สมัครสมาชิก Pro',
            buttonVariant: 'contained' as const,
        },
        {
            title: 'Business',
            subtitle: 'สำหรับเจ้าของธุรกิจ/SME',
            price: '1,599',
            description: [
                'ทุกอย่างในแพ็กเกจ Pro',
                'AI เชี่ยวชาญพิเศษด้านภาษีธุรกิจ',
                'ปรึกษาทีมผู้เชี่ยวชาญได้ 2 ครั้ง/เดือน',
                'รองรับ 5 ผู้ใช้งาน',
                'รายงานสรุปภาษีประจำปี',
                'Priority Support',
            ],
            notIncluded: [],
            buttonText: 'ติดต่อฝ่ายขาย',
            buttonVariant: 'outlined' as const,
        },
    ];

    return (
        <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', py: 8 }}>
            <Container maxWidth="lg" component="main">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography component="h1" variant="h3" color="text.primary" gutterBottom sx={{ fontWeight: 700 }}>
                        เลือกแผนที่เหมาะกับคุณ
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="p" sx={{ maxWidth: 600, mx: 'auto' }}>
                        เริ่มต้นจัดการภาษีของคุณให้ง่ายขึ้นด้วย AI อัจฉริยะ อัพเกรดเพื่อปลดล็อกขีดจำกัดและฟีเจอร์ระดับสูง
                    </Typography>
                </Box>

                {/* Plan Cards */}
                <Grid container spacing={4} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid
                            key={tier.title}
                            size={{ xs: 12, sm: tier.title === 'Business' ? 12 : 6, md: 4 }}
                        >
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    position: 'relative',
                                    transition: '0.3s',
                                    border: tier.title === 'Pro' ? '2px solid #1565c0' : '1px solid #e2e8f0',
                                    boxShadow: tier.title === 'Pro'
                                        ? '0 8px 40px rgba(21, 101, 192, 0.15)'
                                        : '0 4px 20px rgba(0,0,0,0.05)',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                                    }
                                }}
                            >
                                {/* Popular Badge */}
                                {tier.title === 'Pro' && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            right: 16,
                                        }}
                                    >
                                        <Chip
                                            label="ขายดี"
                                            color="primary"
                                            size="small"
                                            sx={{ fontWeight: 600, bgcolor: '#1565c0' }}
                                        />
                                    </Box>
                                )}

                                <CardContent sx={{ p: 4 }}>
                                    <Typography component="div" variant="h6" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
                                        {tier.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary" sx={{ fontWeight: 700 }}>
                                            ฿{tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /เดือน
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                        {tier.subtitle}
                                    </Typography>

                                    <Divider sx={{ mb: 3 }} />

                                    <List sx={{ mb: 2 }}>
                                        {tier.description.map((line) => (
                                            <ListItem key={line} disablePadding sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <CheckCircleIcon sx={{ color: '#00c853', fontSize: 20 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={line} primaryTypographyProps={{ variant: 'body2', color: 'text.primary' }} />
                                            </ListItem>
                                        ))}
                                        {tier.notIncluded?.map((line) => (
                                            <ListItem key={line} disablePadding sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <CancelIcon sx={{ color: '#cbd5e1', fontSize: 20 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={line} primaryTypographyProps={{ variant: 'body2', color: 'text.disabled' }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <CardActions sx={{ p: 2, pt: 0 }}>
                                    <Button
                                        fullWidth
                                        variant={tier.buttonVariant}
                                        color="primary"
                                        size="large"
                                        sx={{
                                            py: 1.5,
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            ...(tier.buttonVariant === 'contained' && {
                                                bgcolor: '#1565c0',
                                                '&:hover': { bgcolor: '#134a8a' }
                                            })
                                        }}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
