import { Button, Badge } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import './assets/css/Home.css';
import './assets/css/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { logout } = useAuth();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="header-container">
      <h2  className="header-title" onClick={() => navigate('/home')}>
        Movie Ticket Booking
      </h2>
      <div>
        <Button 
          type="primary" 
          className="me-2"
          onClick={() => navigate('/cart')}
        >
          Cart <Badge count={totalItems} offset={[5, -10]} />
        </Button>
        <Button danger onClick={() => { logout(); navigate('/'); }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
