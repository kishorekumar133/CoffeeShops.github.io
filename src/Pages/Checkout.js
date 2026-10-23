import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import '../Styles/Checkout.css';

const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value);

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [placedOrder, setPlacedOrder] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', pincode: '', payment: 'cod' });
  const [error, setError] = useState('');
  const delivery = total >= 499 ? 0 : 40;
  const grandTotal = total + delivery;
  const change = event => setForm({ ...form, [event.target.name]: event.target.value });

  function submitOrder(event) {
    event.preventDefault();
    if (!cart.length) { setError('Your cart is empty. Add a product before checkout.'); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone)) { setError('Enter a valid 10-digit Indian mobile number.'); return; }
    if (!/^\d{6}$/.test(form.pincode)) { setError('Enter a valid 6-digit PIN code.'); return; }
    const order = { id: 'COF' + Date.now().toString().slice(-8), customer: form, items: cart, total: grandTotal, createdAt: new Date().toLocaleString('en-IN') };
    if (form.payment === 'online-demo') {
      setError('Online payment is not configured. Choose Cash on Delivery for this demo, or connect a payment gateway on a secure backend.');
      return;
    }
    setPlacedOrder(order);
    clearCart();
  }

  if (placedOrder) return <main className="shop-page"><section className="success-card"><div className="success-check">✓</div><p className="shop-eyebrow">ORDER CONFIRMED</p><h1>Thanks, {placedOrder.customer.name}!</h1><p>Your demo order has been placed successfully.</p><div className="order-number">Order ID <strong>{placedOrder.id}</strong></div><div className="success-details"><span>Delivery address</span><p>{placedOrder.customer.address}, {placedOrder.customer.city} - {placedOrder.customer.pincode}</p><span>Payment method</span><p>Cash on Delivery</p><span>Order total</span><strong>{money(placedOrder.total)}</strong></div><p className="secure-note">This is a frontend demonstration. The order is not sent to a shop or saved to a server.</p><Link to="/product" className="shop-primary">Continue shopping</Link></section></main>;

  if (!cart.length) return <main className="shop-page"><section className="empty-cart"><h1>No items to checkout</h1><p>Your cart is empty.</p><Link to="/product" className="shop-primary">Browse products</Link></section></main>;

  return <main className="shop-page"><div className="shop-heading"><div><p className="shop-eyebrow">ALMOST THERE</p><h1>Checkout</h1></div><Link to="/card" className="shop-secondary">Back to cart</Link></div>
    <form className="checkout-layout" onSubmit={submitOrder} noValidate><section className="checkout-form">
      <div className="checkout-panel"><h2>1. Contact details</h2><div className="form-grid"><label>Full name<input name="name" value={form.name} onChange={change} required autoComplete="name" /></label><label>Email address<input type="email" name="email" value={form.email} onChange={change} required autoComplete="email" /></label><label>Mobile number<input name="phone" value={form.phone} onChange={change} required inputMode="numeric" maxLength="10" autoComplete="tel" /></label></div></div>
      <div className="checkout-panel"><h2>2. Delivery address</h2><div className="form-grid"><label className="span-two">House number, street and area<textarea name="address" value={form.address} onChange={change} required rows="3" autoComplete="street-address" /></label><label>City<input name="city" value={form.city} onChange={change} required autoComplete="address-level2" /></label><label>PIN code<input name="pincode" value={form.pincode} onChange={change} required inputMode="numeric" maxLength="6" autoComplete="postal-code" /></label></div></div>
      <div className="checkout-panel"><h2>3. Payment method</h2><label className="payment-option"><input type="radio" name="payment" value="cod" checked={form.payment === 'cod'} onChange={change} /> <span><strong>Cash on Delivery</strong><small>Pay when your order arrives (demo only)</small></span></label><label className="payment-option disabled-payment"><input type="radio" name="payment" value="online-demo" checked={form.payment === 'online-demo'} onChange={change} /> <span><strong>Online payment</strong><small>Not enabled — requires a real payment gateway and backend</small></span></label></div>
      {error && <p className="checkout-error" role="alert">{error}</p>}<button className="shop-primary full-width" type="submit">Place demo order · {money(grandTotal)}</button><p className="secure-note">Never enter card numbers, UPI PINs or banking passwords on this demo site.</p>
    </section><aside className="order-summary"><h2>Order details</h2>{cart.map(item => <div className="checkout-line" key={item.id}><span>{item.name} × {item.quantity}</span><span>{money(item.price * item.quantity)}</span></div>)}<div><span>Subtotal</span><span>{money(total)}</span></div><div><span>Delivery</span><span>{delivery === 0 ? 'FREE' : money(delivery)}</span></div><div className="summary-total"><span>Total</span><strong>{money(grandTotal)}</strong></div></aside></form>
  </main>;
}
