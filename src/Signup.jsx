import { useState } from 'react';
import { Input, Button, Card } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import './assets/css/Login.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('User registered successfully!');
      navigate('/');
    } else {
      alert('Please enter all fields');
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <h2 className="login-title">Sign Up</h2>
        <Input className="mb-2" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
        <Input className="mb-3" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        <Button type="primary" className="login-button" onClick={handleSignup}>
          Register
        </Button>
        <div className="signup-link">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
