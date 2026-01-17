'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

// Icons
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuIcon from '@mui/icons-material/Menu'; // For mobile trigger if needed

// ------------------- Types -------------------
interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface ChatSession {
    id: string;
    title: string;
    date: string;
}

// ------------------- Mock Data -------------------
const MOCK_HISTORY: ChatSession[] = [
    { id: '1', title: 'สอบถามเรื่องลดหย่อนภาษี', date: 'วันนี้' },
    { id: '2', title: 'การยื่น ภ.ง.ด. 90', date: 'เมื่อวาน' },
    { id: '3', title: 'ช่วยคำนวณภาษีเงินได้', date: '7 วันที่แล้ว' },
];

export default function ChatPage() {
    // State
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: 'init-1',
            text: 'สวัสดีครับ ผมคือผู้ช่วย AI สำหรับให้คำปรึกษาเรื่องภาษี แบบจำลอง style GPT/Gemini ครับ มีอะไรให้ช่วยไหมครับ?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [selectedChatId, setSelectedChatId] = React.useState<string | null>('new');
    const [history, setHistory] = React.useState<ChatSession[]>(MOCK_HISTORY);

    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    // Handlers
    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Mock bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: getMockResponse(userMessage.text),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsLoading(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handlesNewChat = () => {
        setSelectedChatId('new-' + Date.now());
        setMessages([
            {
                id: Date.now().toString(),
                text: 'เริ่มบทสนทนาใหม่แล้วครับ มีเรื่องภาษีอะไรให้ผมช่วยดูแลวันนี้ครับ?',
                sender: 'bot',
                timestamp: new Date(),
            }
        ]);
    };

    const getMockResponse = (text: string): string => {
        if (text.includes('ลดหย่อน')) return 'สำหรับการลดหย่อนภาษีปีนี้... (Gemini Style Response)';
        if (text.includes('ยื่นภาษี')) return 'คุณสามารถยื่นภาษีได้ที่...';
        return 'ขออภัยครับ ผมเป็นระบบทดสอบ โปรดระบุคำถามให้ชัดเจนอีกครั้งเกี่ยวกับภาษีครับ';
    };

    return (
        <Box sx={{
            display: 'flex',
            height: 'calc(100vh - 64px)', // Deduct default Navbar height
            bgcolor: '#ffffff',
            overflow: 'hidden'
        }}>

            {/* ---------------- Sidebar ---------------- */}
            <Box sx={{
                width: 280,
                bgcolor: '#f0f4f9',
                borderRight: '1px solid #e0e0e0',
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                p: 2
            }}>
                {/* New Chat Button */}
                <Box
                    onClick={handlesNewChat}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        mb: 3,
                        bgcolor: '#dde3ea',
                        borderRadius: 4,
                        cursor: 'pointer',
                        transition: '0.2s',
                        '&:hover': { bgcolor: '#cdd5df' },
                        color: '#444746'
                    }}
                >
                    <AddIcon sx={{ color: '#444746' }} />
                    <Typography variant="body2" fontWeight={500}>เริ่มแชทใหม่</Typography>
                </Box>

                {/* History List */}
                <Typography variant="caption" sx={{ mb: 1, px: 1.5, fontWeight: 600, color: '#444746' }}>
                    ล่าสุด
                </Typography>

                <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    {history.map((item) => (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton
                                selected={selectedChatId === item.id}
                                sx={{
                                    borderRadius: 2,
                                    py: 1,
                                    mb: 0.5,
                                    '&.Mui-selected': { bgcolor: '#d3e3fd' }
                                }}
                                onClick={() => setSelectedChatId(item.id)}
                            >
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <ChatBubbleOutlineIcon fontSize="small" sx={{ color: '#444746' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.title}
                                    primaryTypographyProps={{
                                        variant: 'body2',
                                        noWrap: true,
                                        color: '#1f1f1f'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                {/* Bottom User Area */}
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 1, py: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#0b63c2', fontSize: 14 }}>U</Avatar>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#1f1f1f' }}>User Account</Typography>
                </Box>
            </Box>

            {/* ---------------- Chat Area ---------------- */}
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                bgcolor: '#ffffff'
            }}>

                {/* Messages */}
                <Box sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Center the content container
                }}>
                    <Box sx={{ width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 3, pt: 2 }}>
                        {messages.map((message) => (
                            <Box
                                key={message.id}
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    alignItems: 'flex-start',
                                    flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                                }}
                            >
                                {/* Avatar */}
                                <Avatar sx={{
                                    width: 32,
                                    height: 32,
                                    bgcolor: message.sender === 'bot' ? 'transparent' : '#0b63c2',
                                    mt: 0.5
                                }}>
                                    {message.sender === 'bot' ? (
                                        <SmartToyIcon sx={{ color: '#0b63c2' }} /> // Icon only for bot transparency
                                    ) : (
                                        <Typography variant="caption" sx={{ color: 'white' }}>U</Typography>
                                    )}
                                </Avatar>

                                {/* Content */}
                                <Box sx={{
                                    maxWidth: '80%',
                                    bgcolor: message.sender === 'user' ? '#f0f4f9' : 'transparent',
                                    p: message.sender === 'user' ? 2 : 0,
                                    borderRadius: message.sender === 'user' ? '20px 4px 20px 20px' : 0,
                                }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                                        {message.sender === 'bot' ? 'AI Assistant' : 'You'}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#1f1f1f', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                                        {message.text}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <Avatar sx={{ width: 32, height: 32, bgcolor: 'transparent' }}>
                                    <SmartToyIcon sx={{ color: '#0b63c2', opacity: 0.5 }} />
                                </Avatar>
                                <Typography variant="body2" sx={{ color: '#64748b', fontStyle: 'italic' }}>Thinking...</Typography>
                            </Box>
                        )}

                        <div ref={messagesEndRef} style={{ height: 20 }} />
                    </Box>
                </Box>

                {/* Input Area - Fixed at bottom center like GPT */}
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{
                        width: '100%',
                        maxWidth: 800,
                        position: 'relative'
                    }}>
                        <Paper
                            component="form"
                            elevation={0}
                            sx={{
                                p: '8px 16px',
                                display: 'flex',
                                alignItems: 'flex-end',
                                borderRadius: 4,
                                bgcolor: '#f0f4f9',
                                border: '1px solid transparent',
                                '&:focus-within': {
                                    bgcolor: '#ffffff',
                                    borderColor: '#0b63c2',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                                },
                                transition: 'all 0.2s'
                            }}
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        >
                            <TextField
                                fullWidth
                                multiline
                                maxRows={8}
                                placeholder="ถามอะไรก็ได้..."
                                variant="standard"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { py: 1 }
                                }}
                            />
                            <IconButton
                                type="submit"
                                color={input.trim() ? 'primary' : 'default'}
                                disabled={!input.trim()}
                                sx={{ mb: 0.5 }}
                            >
                                <SendIcon />
                            </IconButton>
                        </Paper>
                        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 1, color: '#9ca3af' }}>
                            AI อาจแสดงข้อมูลที่ผิดพลาดได้ โปรดตรวจสอบข้อมูลสำคัญ
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}
