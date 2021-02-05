import './ShopBasket.scss'
import {ShoppingCartOutlined} from "@ant-design/icons";


const ShopBasketItem = (props) => {
    return <div className={'shop__basket'}>
        <div className={'shop__basket__products'}>
            <div className={'shop__basket__products__title'}>Pen</div>
            <img className={'shop__basket__products__img'} src={props.src} alt=""/></div>
        <span>Price:{props.price} грн</span>
        <br/>
        {props.hasDiscount ? <span>!Discount! = {props.discount} %</span> : <span>Discount will be soon</span>}
        <button className={'shop__basket__button'} onClick={() => props.deleteProduct(props.id)}
        >Delete from <ShoppingCartOutlined/></button>


    </div>
}
export default ShopBasketItem