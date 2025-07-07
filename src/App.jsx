import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import ProtectedRoute from './protectedRoute';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import Header from './Header';


function App() {
  

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/home" element={
            <ProtectedRoute>
              <>
              <Header/>
              <Home/>
              </>
            </ProtectedRoute>}/>


            <Route path="/movie/:id" element={
            <ProtectedRoute>
            <>
            <Header/>
            <MovieDetails />
            </>
            </ProtectedRoute>} />

            <Route path="/cart" element={
              <ProtectedRoute>
               <>
               <Header/>
                <Cart />
               </>
              </ProtectedRoute>} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
