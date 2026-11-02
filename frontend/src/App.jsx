import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState('');
  const [customer, setCustomer] = useState({ customerName: '', phone: '', address: '' });

  // Load product data from our backend when the page opens.
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch(() => setMessage('Backend se connect nahi ho pa raha. Server check karein.'));
  }, []);

  function addToCart(product) {
    const alreadyAdded = cart.find((item) => item._id === product._id);
    if (alreadyAdded) {
      setCart(cart.map((item) => item._id === product._id
        ? { ...item, quantity: item.quantity + 1 }
        : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setMessage(`${product.name} added to cart`);
  }

  function changeQuantity(productId, amount) {
    const updatedCart = cart
      .map((item) => item._id === productId ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  }

  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const visibleProducts = products.filter((product) => {
    const categoryMatches = selectedCategory === 'All' || product.category === selectedCategory;
    const searchMatches = product.name.toLowerCase().includes(searchText.toLowerCase());
    return categoryMatches && searchMatches;
  });
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  async function placeOrder(event) {
    event.preventDefault();
    if (cart.length === 0) {
      setMessage('Please add a product to cart first.');
      return;
    }

    const orderData = {
      ...customer,
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: cartTotal
    };

    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      setMessage(`Thank you! Your order ID is ${result.order._id}`);
      setCart([]);
      setCustomer({ customerName: '', phone: '', address: '' });
    } catch (error) {
      setMessage(error.message || 'Order place nahi ho paya. Backend check karein.');
    }
  }

  return (
    <div>
      <div className="top-line">A LITTLE SOMETHING FOR YOUR EVERYDAY LIFE · FREE DELIVERY ON ORDERS ABOVE ₹999</div>
      <header className="navbar">
        <a className="logo" href="#home">sarthiq<span>.</span><small>by Sarthak Raj</small></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
        </nav>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>Bag ({cartCount})</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">GOOD FINDS. EVERYDAY JOY.</p>
            <h1>Make room for<br /><em>better things.</em></h1>
            <p className="hero-description">Thoughtful picks for your everyday life. Discover useful, lovely things without making shopping complicated.</p>
            <a className="dark-button" href="#shop">Explore the collection <span>↗</span></a>
            <div className="hero-note"><span>✳</span> Shop Smart. Live Better.</div>
          </div>
          <div className="hero-picture">
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1100" alt="Everyday lifestyle products" />
            <div className="picture-tag">THE EVERYDAY EDIT<br /><b>Thoughtfully picked</b></div>
          </div>
        </section>

        <section className="category-strip">
          <div><span>01</span><b>Useful things</b><small>Made for daily life</small></div>
          <div><span>02</span><b>Easy shopping</b><small>Simple from start to finish</small></div>
          <div><span>03</span><b>Good value</b><small>Little finds, lovely prices</small></div>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading">
            <div><p className="eyebrow">THE SARTHIQ COLLECTION</p><h2>Find your <em>favourite.</em></h2></div>
            <p>Everyday essentials and little upgrades<br />that make a difference.</p>
          </div>
          <div className="shop-tools">
            <div className="filters">
              {categories.map((category) => (
                <button key={category} className={selectedCategory === category ? 'filter active' : 'filter'} onClick={() => setSelectedCategory(category)}>{category}</button>
              ))}
            </div>
            <input className="search-box" type="search" placeholder="Search products..." value={searchText} onChange={(event) => setSearchText(event.target.value)} />
          </div>

          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article className="product-card" key={product._id}>
                <div className="product-image"><img src={product.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700'} alt={product.name} /><span className="product-number">0{index + 1}</span></div>
                <div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3></div><b>₹{product.price}</b></div>
                <p className="product-description">{product.description}</p>
                <button className="add-button" onClick={() => addToCart(product)}>Add to bag <span>＋</span></button>
              </article>
            ))}
          </div>
          {visibleProducts.length === 0 && <p className="empty-message">No products found. Try another search.</p>}
        </section>

        {showCart && (
          <section className="cart-section" id="cart">
            <div className="section-heading"><div><p className="eyebrow">YOUR SELECTION</p><h2>Your shopping <em>bag.</em></h2></div><button className="text-button" onClick={() => setShowCart(false)}>Close ×</button></div>
            {cart.length === 0 ? <p>Your bag is empty. Add something you like!</p> : (
              <>
                <div className="cart-items">
                  {cart.map((item) => <div className="cart-item" key={item._id}><img src={item.image} alt={item.name} /><div><b>{item.name}</b><p>₹{item.price}</p><div className="quantity"><button onClick={() => changeQuantity(item._id, -1)}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item._id, 1)}>＋</button></div></div><strong>₹{item.price * item.quantity}</strong></div>)}
                </div>
                <div className="checkout-area"><div className="total-line"><span>Total</span><b>₹{cartTotal}</b></div><h3>Delivery details</h3><form onSubmit={placeOrder} className="checkout-form"><input required placeholder="Your name" value={customer.customerName} onChange={(e) => setCustomer({ ...customer, customerName: e.target.value })} /><input required placeholder="Phone number" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} /><textarea required placeholder="Full delivery address" value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} /><button className="dark-button" type="submit">Place COD order <span>↗</span></button></form></div>
              </>
            )}
          </section>
        )}

        <section className="about-section" id="about"><div className="about-mark">s<span>.</span></div><div><p className="eyebrow">A NOTE FROM SARTHIQ</p><h2>Less fuss.<br /><em>More good stuff.</em></h2><p>We believe shopping should feel simple. Sarthiq brings together useful everyday products in one easy place.</p></div><div className="about-side">Shop Smart.<br />Live Better.<span>✳</span></div></section>
      </main>

      <footer><a className="logo" href="#home">sarthiq<span>.</span></a><p>© 2026 Sarthiq by Sarthak Raj. Made for everyday living.</p><a href="#home">Back to top ↑</a></footer>
      {message && <div className="message"><span>{message}</span><button onClick={() => setMessage('')}>×</button></div>}
    </div>
  );
}

export default App;
