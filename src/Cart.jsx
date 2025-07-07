import { Card, Button, List } from 'antd';
import { useCart } from './CartContext';
import './assets/css/Cart.css';

const Cart = () => {
  const { cart, increase, decrease, remove } = useCart();

  return (
    <>
  <div className="cart-container">
  <div className="cart-card">
    <Card title={<h3 className="cart-title">Your Cart</h3>} 
    className="mx-auto mt-4"
    style={{ maxWidth: 600 }}>
      <List
        dataSource={cart}
        renderItem={(item) => (
          <List.Item>
            <div className="w-100">
              <h5>{item.name}</h5>
              {/* <p>Price: ₹{item.ticketprice} | Quantity: {item.quantity}</p> */}
              <p>
              Unit Price: ₹{item.ticketprice} | Quantity: {item.quantity} <br />
              <strong>Total: ₹{item.ticketprice * item.quantity}</strong>
             </p>
              <Button onClick={() => increase(item.id)}>+</Button>
              <Button className="mx-2" onClick={() => decrease(item.id)} style={{ margin: '0 5px' }}>-</Button>
              <Button danger onClick={() => remove(item.id)}>Remove</Button>
            </div>
          </List.Item>
        )}
      />

    </Card>
    </div>
    </div>
    </>
  );
};

export default Cart;