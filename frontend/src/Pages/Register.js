import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
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
        minHeight: '100vh', // Ensure the minimum height is applied
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
        Create Your Account
      </Typography>
      <Paper
      className='login'
        elevation={6}
        style={{
          padding: theme.spacing(4),
          marginTop: theme.spacing(8),
          textAlign: 'center',
          width: '100%',
          maxWidth: '400px' // Adjust the max-width if needed
        }}
      >
        <Typography component="h2" variant="h6" style={{ textAlign: "left" }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: theme.spacing(2) }}>
          <Box mb={2}>
            <TextField
              variant="outlined"
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              autoFocus
            />
          </Box>
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
              autoComplete="new-password"
            />
          </Box>
          <Box mb={2}>
            <TextField
              variant="outlined"
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: theme.spacing(3) }}
          >
            Register
          </Button>
          <Box mt={2}>
            <Typography variant="body2" color="textSecondary">
              Already have an account? <a href="/login" style={{ color: theme.palette.primary.main }}>Login here</a>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
    </div>
  );
}
