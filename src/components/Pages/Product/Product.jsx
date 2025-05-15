import './Product.css';

import { listProduct } from '../../../data/product';
import { useEffect } from 'react';

function Product() {

  useEffect(() => {
    document.title  = 'Elkeh Music | Produtos';
  }, []);

  return (
    <section className="product content__space">
        <h2 className="content__subtitle">Produtos</h2>

        <div className="product__group">
          {listProduct.map((product, index) =>
            <div className="product__layer" key={index}>
                <img src={`/assets/product/0${product.id}.png`} alt={`Produto (${product.title})`}/>
                <p className="content__text">{product.title}</p>
                <span className="product__tag">{product.category}</span>
                <a href={`https://wa.me/+55859921597561?text=Tenho interesse no produto (${product.title}), pode me ajudar?`} target="_blank" className="link-whatsapp">Chamar no whatsapp</a>
            </div>
          )}
        </div>
    </section>
  )
}

export default Product;