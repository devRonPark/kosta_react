import { FaShoppingBasket } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const ProductItem = ({product, style, btnName, clickBtnHandler, changeBtnHandler}) => {
    return (
        <div style={style}>
            <span
                style={{ cursor: 'pointer' }} 
                onClick={() => changeBtnHandler(product)}
            >
                {product.name}
            </span>
            <button onClick={() => clickBtnHandler(product)}>
                {btnName == 'add' &&  <FaShoppingBasket />}
                {btnName == 'remove' && <RiDeleteBin5Line />}
            </button>
        </div>
    )
}

export default ProductItem;