import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="movie-card">
    <Card
      hoverable 
      style={{ width: '100%' }}
      cover={<img alt={movie.name} src={movie.image} 
      style={{ height: '300px', objectFit: 'cover' }}
      />}
    >
      <Card.Meta title={movie.name} description={`Price: ₹${movie.ticketprice}`} />
      <Button type="link" onClick={() => navigate(`/movie/${movie._id}`)}>Details</Button>
      <Button type="primary" onClick={() => addToCart(movie)}>Add to Cart</Button>
    </Card>
    </div>
  );
};

export default MovieCard;
