import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Swal from 'sweetalert2'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem('auth', 'true');
        sessionStorage.setItem('userID', data.userID);

        // Show success alert using SweetAlert2
        Swal.fire({
          title: 'Login successful!',
          text: 'You are being redirected to the homepage.',
          icon: 'success',
          confirmButtonText: 'OK',
          onClose: () => navigate('/'),
          preConfirm: () => {
            navigate('/'); 
            window.location.reload(); 
          },
        });
      } else {
        Swal.fire({
          title: 'Login failed',
          text: data.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error',
        text: 'An unexpected error occurred.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className='login'>
      <Container
        component="main"
        maxWidth="xs"
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography 
          component="h1" 
          variant="h2" 
          style={{ 
            marginTop: "15%", 
            textAlign: 'center', 
            fontWeight: 700, 
            fontSize: '2.5rem',
            color: '#ffffff',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            borderRadius: theme.shape.borderRadius,
          }}
        >
          Welcome! Please Sign In to Enter
        </Typography>
        <Paper
          className='login'
          elevation={6}
          style={{
            padding: theme.spacing(4),
            marginTop: theme.spacing(8),
            textAlign: 'center',
            width: '100%',
            maxWidth: '400px'
          }}
        >
          <Typography component="h2" variant="h6" style={{textAlign : "left"}}>
            Enter Your Credentials
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: theme.spacing(2) }}>
            <Box mb={2}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                autoFocus
              />
            </Box>
            <Box mb={2}>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: theme.spacing(3) }}
            >
              Login
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">Don't have an account? <a href="/register" className="text-indigo-500 font-medium hover:underline">Register here</a></p>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
