import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Price from '../../components/Price/Price';
import Tags from '../../components/Tags/Tags';
import { getById } from '../../services/productService';
import classes from './productsPage.module.css';
import { useCart } from '../../hooks/useCart';
export default function ProoductPage() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  useEffect(() => {
    getById(id).then(setProduct);
  }, [id]);
  return (
    <>
      {product && (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`${product.imageUrl}`}
            alt={product.name}
          />

          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{product.name}</span>
            </div>
            <div className={classes.originCountry}>
              {product.originCountry?.map(originCountry => (
                <span key={originCountry}>{originCountry}</span>
              ))}
            </div>

            <div className={classes.tags}>
              {product.tags && (
                <Tags
                  tags={product.tags.map(tag => ({ name: tag }))}
                  forProductPage={true}
                />
              )}
            </div>
            <div className={classes.price}>
              <Price price={product.price} />
            </div>

            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}