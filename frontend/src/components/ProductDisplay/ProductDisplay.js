import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import classes from './productdisplay.module.css';
export default function ProductDisplay({ products }) {
  return (
    <ul className={classes.list}>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img
              className={classes.image}
              src={`/products/${product.imageUrl}`}
              alt={product.name}
            />

            <div className={classes.content}>
              <div className={classes.name}>{product.name}</div>
              <div className={classes.product_item_footer}>
                <div className={classes.originCountry}>
                  {product.originCountry.map(originCountry => (
                    <span key={originCountry}>{originCountry}</span>
                  ))}
                </div>
              </div>
              <div className={classes.price}>
                <Price price={product.price} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}