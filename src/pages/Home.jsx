import { useState } from 'react';
import { sneakers } from '../data/sneakers';
import ProductCard from '../components/ProductCard';

export default function Home({ addToCart, toggleWishlist, wishlist }) {
  // Pure Frontend States for Interactions
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');

  // Real-Time Search & Category Filtering Logic
  const filteredSneakers = sneakers.filter(sneaker => {
    const matchesSearch = sneaker.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || sneaker.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div style={styles.container}>
      
      {/* 1. PREMIUM HERO SECTION WITH GRADIENT */}
      <section style={styles.hero} className="glass-effect">
        <div style={styles.heroOverlay}>
          <span style={styles.heroTag}>LIMITED DROP 🔥</span>
          <h1 style={styles.heroTitle}>STEP INTO THE <br /><span style={styles.gradientText}>FUTURE</span></h1>
          <p style={styles.heroSubtitle}>Explore premium glassmorphism designs, elite performance, and iconic silhouettes curated just for you.</p>
          <button style={styles.heroBtn} onClick={() => document.getElementById('shop-section').scrollIntoView({ behavior: 'smooth' })}>
            Explore Collection ↓
          </button>
        </div>
      </section>

      {/* 2. SMART FILTER INTERFACE */}
      <div id="shop-section" style={styles.searchFilterContainer}>
        <div style={styles.searchWrapper}>
          <input 
            type="text" 
            placeholder="Search your favorite sneakers..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
            className="glass-effect"
          />
        </div>

        {/* Category Row */}
        <div style={styles.brandRow}>
          {['All', 'Nike', 'Jordan', 'Adidas'].map(brand => (
            <button 
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              style={{
                ...styles.brandBtn,
                background: selectedBrand === brand ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)',
                color: selectedBrand === brand ? 'white' : 'var(--text-color)'
              }}
              className="glass-effect"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* 3. SNEAKER RELEASES GRID */}
      <h2 style={styles.sectionTitle}>Trending Sneaker Releases</h2>
      <div style={styles.grid}>
        {filteredSneakers.length > 0 ? (
          filteredSneakers.map(sneaker => (
            <ProductCard 
              key={sneaker.id} 
              product={sneaker} 
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.includes(sneaker.id)}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', opacity: 0.6 }}>No sneakers match your search criteria.</p>
        )}
      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: '20px max(2rem, 5vw)',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  hero: {
    borderRadius: '24px',
    padding: '60px 40px',
    marginTop: '20px',
    textAlign: 'left',
    background: 'linear-gradient(135deg, rgba(255, 71, 87, 0.1) 0%, rgba(122, 115, 255, 0.1) 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  heroOverlay: {
    maxWidth: '600px'
  },
  heroTag: {
    fontSize: '14px',
    fontWeight: '800',
    color: 'var(--accent-color)',
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '10px'
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    marginBottom: '20px'
  },
  gradientText: {
    background: 'linear-gradient(45deg, #ff4757, #7a73ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  heroSubtitle: {
    fontSize: '18px',
    opacity: 0.8,
    marginBottom: '30px',
    lineHeight: '1.6'
  },
  heroBtn: {
    fontSize: '16px',
    padding: '12px 28px',
    borderRadius: '30px'
  },
  searchFilterContainer: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  searchWrapper: {
    width: '100%',
    maxWidth: '500px'
  },
  searchInput: {
    width: '100%',
    padding: '15px 25px',
    borderRadius: '30px',
    border: '1px solid var(--card-border)',
    fontSize: '16px',
    color: 'var(--text-color)',
    outline: 'none',
  },
  brandRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  brandBtn: {
    padding: '8px 24px',
    borderRadius: '20px',
    fontWeight: '600',
    border: '1px solid var(--card-border)'
  },
  sectionTitle: {
    marginTop: '50px',
    marginBottom: '25px',
    fontSize: '28px',
    fontWeight: '800',
    letterSpacing: '-0.5px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    justifyItems: 'center'
  }
};