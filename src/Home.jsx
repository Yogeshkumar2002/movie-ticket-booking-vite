import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Input } from 'antd';
import MovieCard from './MovieCard';
import './assets/css/Home.css';

const { Search } = Input;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://backend-crud-one.vercel.app/product`)
      .then(response => {
        setMovies(response.data);
        setFilteredMovies(response.data);
  })
      .catch(error => console.error(error));
  }, []);

   const handleSearch = (value) => {
    const filtered = movies.filter(movie =>
      movie.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };
  

  return (
    <div style={{ padding: 20 }}>
       <Search
       className="search-bar"
        placeholder="Search movies"
        // allowClear
        enterButton //="Search"
        //size="large"
        onSearch={handleSearch}
      />

      <Row gutter={[16, 16]} style={{ padding: 24 }} justify="center">
        {filteredMovies.map(movie => (
          // <Col span={6} key={movie.id}>
          <Col xs={24} sm={12} md={8} lg={6} xl={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>

    
    
    // <Row gutter={[16, 16]} style={{ padding: 20 }}>
    //   {movies.map(movie => (
    //     <Col span={6} key={movie.id}>
    //       <MovieCard movie={movie} />
    //     </Col>
    //   ))}
    // </Row>
  );
};

export default Home;