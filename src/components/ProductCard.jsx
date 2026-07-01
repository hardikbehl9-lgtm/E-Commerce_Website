import { Link } from 'react-router-dom';

export default function ProductCard({ product, addToCart, toggleWishlist, isWishlisted }) {
  return (
    <div className="glass-effect product-card" style={styles.card}>
      
      {/* 1. Badges (Flash Sale / Trending) */}
      <div style={styles.badgeContainer}>
        {product.flashSale && <span style={styles.flashBadge}>⚡ FLASH SALE</span>}
        {product.trending && <span style={styles.trendingBadge}>🔥 TRENDING</span>}
      </div>

      {/* 2. Wishlist Heart Button */}
      <button 
        onClick={() => toggleWishlist(product.id)} 
        style={{ ...styles.wishlistBtn, color: isWishlisted ? '#ff4757' : '#888' }}
      >
        {isWishlisted ? '❤️' : '🤍'}
      </button>

      {/* 3. Sneaker Image Showcase */}
      <div style={styles.imageWrapper}>
        <img src={product.image} alt={product.name} style={styles.image} className="sneaker-img" />
      </div>

      {/* 4. Product Details Info */}
      <div style={styles.info}>
        <span style={styles.brand}>{product.brand}</span>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.category}>{product.category}</p>
        
        <div style={styles.footerRow}>
          <span style={styles.price}>${product.price.toFixed(2)}</span>
          <button onClick={() => addToCart(product)} style={styles.addBtn}>
            + Add
          </button>
        </div>
        
        <Link to={`/product/${product.id}`} style={styles.detailsLink}>
          View Details →
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '300px',
    margin: '10px'
  },
  badgeContainer: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    zIndex: 2
  },
  flashBadge: {
    background: '#ff4757',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '20px'
  },
  trendingBadge: {
    background: '#ffa502',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '20px'
  },
  wishlistBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'rgba(255,255,255,0.6)',
    backdropFilter: 'blur(5px)',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    zIndex: 2
  },
  imageWrapper: {
    width: '100%',
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    overflow: 'hidden',
    background: 'rgba(0,0,0,0.03)'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  brand: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: 0.6,
    fontWeight: 'bold'
  },
  name: {
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '1.2',
    height: '38px',
    overflow: 'hidden'
  },
  category: {
    fontSize: '13px',
    opacity: 0.7
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px'
  },
  price: {
    fontSize: '20px',
    fontWeight: '800',
    color: 'var(--text-color)'
  },
  addBtn: {
    padding: '6px 12px',
    fontSize: '14px'
  },
  detailsLink: {
    textAlign: 'center',
    marginTop: '12px',
    fontSize: '13px',
    color: 'var(--accent-color)',
    textDecoration: 'none',
    fontWeight: '600'
  }
};