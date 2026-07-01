import { useParams, Link } from 'react-router-dom';
import { sneakers } from '../data/sneakers';

export default function ProductDetails({ addToCart, toggleWishlist, wishlist }) {
  // Grab the sneaker ID from the URL path row
  const { id } = useParams();
  
  // Find the matching sneaker object from our data
  const sneaker = sneakers.find(s => s.id === parseInt(id));

  // Safe fallback if a user types a wrong URL manually
  if (!sneaker) {
    return (
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <h2>👟 Sneaker drop not found!</h2>
        <Link to="/" style={{ color: 'var(--accent-color)' }}>Return to Catalog</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(sneaker.id);

  return (
    <div style={styles.container}>
      {/* Back Button navigation */}
      <Link to="/" style={styles.backLink}>← Back to Releases</Link>

      <div style={styles.mainLayout}>
        {/* 1. PREMIUM IMAGE SHOWCASE GALLERY */}
        <div className="glass-effect" style={styles.imageCard}>
          <img src={sneaker.image} alt={sneaker.name} style={styles.image} />
        </div>

        {/* 2. DYNAMIC DETAILS & SPECIFICATIONS VIEW */}
        <div className="glass-effect" style={styles.detailsCard}>
          <span style={styles.brand}>{sneaker.brand}</span>
          <h1 style={styles.name}>{sneaker.name}</h1>
          <p style={styles.categoryTag}>{sneaker.category} Silhouette</p>
          
          <div style={styles.priceRow}>
            <span style={styles.price}>${sneaker.price.toFixed(2)}</span>
            <span style={styles.stockStatus}>🟢 In Stock (Ready to Ship)</span>
          </div>

          <p style={styles.description}>{sneaker.description}</p>

          {/* Sizing Blueprint Layout Section */}
          <div style={styles.sizeSection}>
            <h4 style={styles.subTitle}>Select US Men's Size:</h4>
            <div style={styles.sizeGrid}>
              {[8, 9, 9.5, 10, 10.5, 11, 12].map(size => (
                <div key={size} style={styles.sizeBox} className="glass-effect">{size}</div>
              ))}
            </div>
          </div>

          {/* 3. INTERACTIVE INTERACTION ACTIONS */}
          <div style={styles.actionsRow}>
            <button onClick={() => addToCart(sneaker)} style={styles.mainCartBtn}>
              💥 Secure Pair (Add to Cart)
            </button>
            <button 
              onClick={() => toggleWishlist(sneaker.id)} 
              style={{
                ...styles.wishlistBtn,
                borderColor: isWishlisted ? 'var(--accent-color)' : 'var(--card-border)'
              }}
              className="glass-effect"
            >
              {isWishlisted ? '❤️ Saved' : '🤍 Wishlist'}
            </button>
          </div>

          {/* 4. PROGRESSIVE ORDER STATUS BLOCK (Clever Visual Hack) */}
          <div style={styles.trackerBlock}>
            <h4 style={styles.subTitle}>Estimated Processing Verification:</h4>
            <div style={styles.trackerTimeline}>
              <div style={styles.step}><span>✓</span><p>Authenticated</p></div>
              <div style={styles.line}></div>
              <div style={styles.step}><span>✓</span><p>Box Inspection</p></div>
              <div style={styles.line} style={{ ...styles.line, background: '#ccc' }}></div>
              <div style={{ ...styles.step, opacity: 0.5 }}><span>3</span><p>Express Dispatch</p></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px max(2rem, 5vw)',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '20px',
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontWeight: '600',
    opacity: 0.7
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
    alignItems: 'start'
  },
  imageCard: {
    borderRadius: '24px',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    objectFit: 'cover'
  },
  detailsCard: {
    borderRadius: '24px',
    padding: '4px 30px 30px 30px'
  },
  brand: {
    fontSize: '14px',
    fontWeight: '800',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'var(--accent-color)',
    display: 'block',
    marginTop: '25px'
  },
  name: {
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    fontWeight: '800',
    margin: '5px 0 10px 0',
    lineHeight: '1.2'
  },
  categoryTag: {
    fontSize: '14px',
    opacity: 0.6,
    marginBottom: '20px'
  },
  priceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--card-border)',
    paddingBottom: '15px',
    marginBottom: '20px'
  },
  price: {
    fontSize: '28px',
    fontWeight: '900'
  },
  stockStatus: {
    fontSize: '13px',
    fontWeight: '600'
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.6',
    opacity: 0.8,
    marginBottom: '25px'
  },
  subTitle: {
    fontSize: '14px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '12px',
    opacity: 0.9
  },
  sizeGrid: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '30px'
  },
  sizeBox: {
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer'
  },
  actionsRow: {
    display: 'flex',
    gap: '15px',
    marginBottom: '35px'
  },
  mainCartBtn: {
    flex: 2,
    padding: '15px',
    borderRadius: '12px',
    fontSize: '16px'
  },
  wishlistBtn: {
    flex: 1,
    background: 'transparent',
    border: '1px solid',
    borderRadius: '12px',
    color: 'var(--text-color)',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trackerBlock: {
    borderTop: '1px solid var(--card-border)',
    paddingTop: '20px'
  },
  trackerTimeline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
  step: {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px'
  },
  line: {
    flex: 1,
    height: '2px',
    background: 'var(--accent-color)',
    margin: '0 10px',
    transform: 'translateY(-10px)'
  }
};