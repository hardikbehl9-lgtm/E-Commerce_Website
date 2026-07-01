import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Chatbot from './components/Chatbot';
function App() {
  // 1. Pure Frontend State (No Database Needed)
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // 2. Apply Dark Mode Class to HTML Body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  // 3. Simple Frontend Helper Functions
  const addToCart = (product) => {
    setCart([...cart, product]);
    // Alert or animation trigger can go here
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        
        {/* Placeholder Navbar until we build the component */}
        <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
          <h2>👟 SNEAKERBOX</h2>
          <div>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <span style={{ marginLeft: '15px' }}>🛒 Cart ({cart.length})</span>
            <span style={{ marginLeft: '15px' }}>❤️ Wishlist ({wishlist.length})</span>
          </div>
        </nav>

        {/* 4. Client-Side Routing Pages */}
        <Routes>
          <Route 
            path="/" 
            element={<Home addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetails addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} 
          />
        </Routes>

        {/* Placeholder Footer */}
        <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px' }}>
          <p>© 2026 SNEAKERBOX Premium Marketplace. All Rights Reserved.</p>
        </footer>

        <Chatbot/>

      </div>
    </Router>
  );
}

export default App;