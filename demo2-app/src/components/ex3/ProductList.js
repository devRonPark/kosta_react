import ProductItem from "./ProductItem";

const ProductList = ({products, addProductToCart, getProductDetail}) => {
    const style = {
        list: { 
            border: '3px solid #333', 
            padding: 10, 
            width: 200,
            listStyle: 'none'
        },
        item: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: 15,
        }
    }
    return (
        <ul style={style.list}>
            {products.map(product => (
                <li key={product.mno}>
                    <ProductItem 
                        style={style.item}
                        product={product}
                        btnName="add"
                        clickBtnHandler={addProductToCart}
                        changeBtnHandler={getProductDetail}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ProductList;