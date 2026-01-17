import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#0f172a' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Hero */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
              เข้าใจภาษี ง่าย และชัดเจน
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(15,23,42,0.75)', mb: 3 }}>
              คู่มือการยื่นภาษีแบบเข้าใจง่าย ทั้งบุคคลธรรมดาและธุรกิจ พร้อมคำแนะนำการเตรียมเอกสาร
              และเครื่องมือคำนวณภาษีที่ช่วยให้คุณยื่นได้อย่างมั่นใจ
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#1565c0', '&:hover': { backgroundColor: '#134a8a' } }}
                size="large"
              >
                เริ่มเลย
              </Button>
              <Button variant="outlined" sx={{ borderColor: '#60a5fa', color: '#1565c0' }} size="large">
                อ่านบทความ
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: 300,
                bgcolor: '#e8f2ff',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 1,
              }}
            >
              <Typography sx={{ color: '#0b4a83', fontWeight: 600 }}>ภาพ/แผนภูมิสรุปการยื่นภาษี</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Features */}
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            บริการของเรา
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: 'เตรียมเอกสารง่าย ๆ',
                desc: 'รายการเอกสารที่ต้องใช้เรียบเรียงเป็นขั้นตอน พร้อม template ที่ดาวน์โหลดได้',
              },
              {
                title: 'ยื่นออนไลน์อย่างปลอดภัย',
                desc: 'คำแนะนำทีละขั้นตอนสำหรับการยื่นผ่านแพลตฟอร์มต่าง ๆ',
              },
              {
                title: 'คำอธิบายและตัวอย่าง',
                desc: 'บทความและตัวอย่างกรณีจริง ทำให้เข้าใจกฎภาษีได้เร็วขึ้น',
              },
              {
                title: 'เครื่องมือคำนวณ',
                desc: 'คำนวณภาษีโดยย่อช่วยให้คุณรู้ว่าต้องเตรียมงบประมาณเท่าไร',
              },
            ].map((f) => (
              <Grid item xs={12} sm={6} md={3} key={f.title}>
                <Card sx={{ borderRadius: 2, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#08306b' }}>
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
            mt: { xs: 6, md: 8 },
            p: 4,
            bgcolor: '#f0f8ff',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              พร้อมจะยื่นภาษีหรือยัง?
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(15,23,42,0.75)' }}>
              ลองเริ่มด้วยเครื่องมือคำนวณเรา หรือขอคำปรึกษาจากผู้เชี่ยวชาญ
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" sx={{ borderColor: '#60a5fa', color: '#0b4a83' }}>
              คำนวณภาษี
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#0b63c2', '&:hover': { backgroundColor: '#094a8d' } }}>
              ขอคำปรึกษา
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 6, py: 4, textAlign: 'center', color: 'rgba(15,23,42,0.6)' }}>
          <Typography variant="body2">© {new Date().getFullYear()} คู่มือภาษี — ทุกสิทธิ์สงวนไว้</Typography>
        </Box>
      </Container>
    </Box>
  );
}
