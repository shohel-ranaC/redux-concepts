import React from 'react';

const Product = (props) => {
    const {name, id} = props.product;
    return (
        <div style={{border: '1px solid orange', borderRadius: '10px', margin: '20px', padding: '20px'}}>
            <h5>{name}</h5>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;