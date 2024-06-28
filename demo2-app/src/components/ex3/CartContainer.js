import { useState } from "react";
import CartList from "./CartList";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const CartContainer = () => {
    const style = {
        wrap: {
            width: 600,
            display: 'flex',
            flexDirection: 'row',
            columnGap: 30,
            margin: '0 auto',
            padding: 20
        }
    };

    const products =  [
        {mno: 1, name: '상품1', price: 3000},
        {mno: 2, name: '상품2', price: 4000},
        {mno: 3, name: '상품3', price: 5000},
        {mno: 4, name: '상품4', price: 6000},
        {mno: 5, name: '상품5', price: 7000},
        {mno: 6, name: '상품6', price: 8000},
    ];
    const [productsInCart, setProductsInCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();

    const addProductToCart = (product) => {
        setProductsInCart(preProductsInCart => [product, ...preProductsInCart])
    }
    const removeProductFromCart = prodToRemove => {
        const filteredProductsInCart = productsInCart.filter(prod => prod.name != prodToRemove.name);
        setProductsInCart(filteredProductsInCart);
    }
    const getProductDetail = (product) => {
        console.log(product);
        setSelectedProduct(product);
    }
    return (
        <div style={style.wrap}>
            <div>
                상품 목록
                <ProductList
                    products={products}
                    addProductToCart={addProductToCart} 
                    getProductDetail={getProductDetail}
                />
                <ProductDetail product={selectedProduct} />
            </div>
            <div style={{
                border: '3px solid #333', 
                padding: 10, 
                width: 200,
            }}>
                <p>
                    <strong>총 합계 : </strong>
                    {productsInCart.reduce((acc, p) => acc + p.price, 0)} 원
                </p>
                <p style={{
                    backgroundColor: 'black',
                    color: 'yellow',
                    textAlign: 'center'
                }}
                >
                    주문상품
                </p>
                <CartList  
                    products={productsInCart}
                    removeProductFromCart={removeProductFromCart}
                />
            </div>
        </div>
    )
}

export default CartContainer;