import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import '../Styles/Checkout.css';

const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value);

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();
  const navigate = useNavigate();
  if (!cart.length) return <main className="shop-page"><section className="empty-cart"><div className="empty-icon">🛒</div><h1>Your cart is empty</h1><p>Add your favourite coffee products to get started.</p><Link className="shop-primary" to="/product">Continue shopping</Link></section></main>;

  return <main className="shop-page">
    <div className="shop-heading"><div><p className="shop-eyebrow">YOUR ORDER</p><h1>Shopping Cart</h1></div><Link className="shop-secondary" to="/product">Continue shopping</Link></div>
    <div className="cart-layout"><section className="cart-items">
      {cart.map(item => <article className="cart-item" key={item.id}>
        <img src={item.image} alt={item.name} />
        <div className="cart-item-info"><h2>{item.name}</h2><p>{item.description}</p><strong>{money(item.price)}</strong>
          <div className="quantity-control"><button aria-label={'Decrease ' + item.name} onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button aria-label={'Increase ' + item.name} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div>
        </div>
        <div className="cart-item-end"><strong>{money(item.price * item.quantity)}</strong><button className="remove-link" onClick={() => removeFromCart(item.id)}>Remove</button></div>
      </article>)}
    </section><aside className="order-summary"><h2>Order Summary</h2><div><span>Subtotal</span><span>{money(total)}</span></div><div><span>Delivery</span><span>{total >= 499 ? 'FREE' : money(40)}</span></div><div className="summary-total"><span>Total</span><strong>{money(total + (total >= 499 ? 0 : 40))}</strong></div><button className="shop-primary full-width" onClick={() => navigate('/checkout')}>Proceed to checkout</button><p className="secure-note">Demo checkout · no payment is collected</p></aside></div>
  </main>;
}
