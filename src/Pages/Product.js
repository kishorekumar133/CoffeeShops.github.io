import React from 'react';
import { useCart } from '../CartContext';
import Product1 from '../Images/p1.jpg';
import Product2 from '../Images/p2.jpg';
import Product3 from '../Images/p3.jpg';
import Product4 from '../Images/p4.jpg';
import Product5 from '../Images/p5.jpg';
import Product6 from '../Images/p6.jpg';
import Product7 from '../Images/p7.jpg';
import Product8 from '../Images/p8.jpg';
import Slide from '../Images/slide.jpg';
import '../Styles/Product.css';

const products = [
  { id: 'coffee-1', name: 'Burma Coffee', price: 150, description: 'Premium blended aromatic coffee', image: Product1 },
  { id: 'coffee-2', name: 'Kenya Coffee', price: 320, description: 'Dark roast blended bean coffee', image: Product2 },
  { id: 'coffee-3', name: 'Kerala Coffee', price: 120, description: 'Lightly roasted classic filter coffee', image: Product3 },
  { id: 'coffee-4', name: 'Nilgiri Coffee', price: 260, description: 'Flavoured medium-roasted coffee', image: Product4 },
  { id: 'coffee-5', name: 'Orissa Coffee', price: 420, description: 'Pure filter-blended Italian cold coffee', image: Product5 },
  { id: 'coffee-6', name: 'Assam Coffee', price: 170, description: 'Gold-rich instant coffee powder', image: Product6 },
  { id: 'coffee-7', name: 'Koha Coffee', price: 320, description: 'Rich creamy fresh-flavour instant coffee', image: Product7 },
  { id: 'coffee-8', name: 'Uttar Coffee', price: 250, description: 'Strong roasted classic Arabica coffee', image: Product8 }
];

export default function Product() {
  const { addToCart, cart } = useCart();
  const countFor = id => cart.find(item => item.id === id)?.quantity || 0;

  return <div className="image" style={{ backgroundImage: `url(${Slide})` }}>
    <div className="star">
      <h1 className="pro">Our Products</h1>
      <div id="card-area"><div className="wrapper"><div className="box-area">
        {products.map(product => <article className="box" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="overlay">
            <h3>{product.name}<br />₹{product.price.toFixed(2)}</h3>
            <p>{product.description}</p>
            <button type="button" className="add-cart-button" onClick={() => addToCart(product)}>
              {countFor(product.id) ? `Add more · ${countFor(product.id)} in cart` : 'Add to Cart'}
            </button>
          </div>
        </article>)}
      </div></div></div>
    </div>
  </div>;
}
