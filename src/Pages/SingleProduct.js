// src/pages/SingleProduct.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'; 
import { useCart } from '../context/CartContext'; 
import Colors from '../components/Colors';
import DetailsThumb from '../components/DetailsThumb';
import "./SingleProduct.css";

function SingleProduct() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [index, setIndex] = useState(0);
  const smImgsRef = useRef(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
        const foundProduct = products.find(prod => prod.id === id); // Find the product by ID
        setProduct(foundProduct);
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [id]);

  const handleImgChange = (newIndex) => {
    setIndex(newIndex);
    const images = smImgsRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[newIndex].className = "active";
  };


  if (!product) return <div>Loading...</div>;

  return (
    <section className="app">
      <div className="details">
        <div className='large-img-wrapper'>
          <img src={product.imageUrl} alt="largeImg" className='large-img'/>
        </div>

        <div className='box'>
          <div className='row'>
            <h2>{product.title}</h2>
            <span>{product.price}DT</span>
          </div>

          <Colors colors={[product.color]} />
          <p>CPU: {product.cpu}</p>
          <p>RAM: {product.ram}</p>
          <p>GPU: {product.gpu}</p>
          <p>Series: {product.series}</p>

          <DetailsThumb images={[product.imageUrl]} handleImgChange={handleImgChange} smImgsRef={smImgsRef} />
          <button className='add-to-cart' onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
