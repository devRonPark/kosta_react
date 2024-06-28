import ProductItem from "./ProductItem";

const CartList = ({products, removeProductFromCart}) => {
    const style = {
        list: { 
            padding: 0,
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
                            btnName="remove"
                            clickBtnHandler={removeProductFromCart}
                        />
                    </li>
                ))}
            </ul>
    )
}

export default CartList;