import { useState } from 'react';
import { Input, Button, Card, Checkbox} from 'antd';
import { useNavigate, Link} from 'react-router-dom';
import { useAuth } from './AuthContext';
import './assets/css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [usepassword, setpassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser) {
    if (storedUser.username === username && storedUser.password === usepassword) {
      login(); 
      navigate('/home'); 
    } else {
      alert('Invalid username or password');
    }
  } else {
    alert('No user found. Please sign up first.');
  }
};

  return (
    <div className="login-container">
    <Card className="login-card">
      <h2 className="login-title">Login</h2>
      <Input className="mb-2" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
      <Input className="mb-3" placeholder="Enter Password" type="password" onChange={(e) => setpassword(e.target.value)} />

      <div className="login-actions">
          <Checkbox>Remember me</Checkbox>
          <span className="forgot-link" onClick={() => alert('Redirect to forgot password')}>
            Forgot password?
          </span>
        </div>

      <Button type="primary" className="login-button" onClick={handleLogin}>Login</Button>

      <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </Card>
    </div>
  );
};

export default Login;