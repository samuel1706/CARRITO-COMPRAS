// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ image, name, price }) => (
    <div className="product-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <button>Ver más</button>
    </div>
);

export default ProductCard;
