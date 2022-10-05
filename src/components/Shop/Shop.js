import React from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';
import { connect } from 'react-redux';

const Shop = (props) => {
  console.log(props);
    const products = [
        {name: 'Asus Laptop', id: 1 },
        {name: 'HP Laptop', id: 2 },
        {name: 'Dell Laptop', id: 3 },
        {name: 'Sony Vio Laptop', id: 4 },
        {name: 'Apple Laptop', id: 5 }
    ]
    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

//const connectToState = connect(mapStateToProps, mapDispatchToProps);
//connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);