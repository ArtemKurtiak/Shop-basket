import './Shop.scss'
import {ShoppingCartOutlined} from "@ant-design/icons";

const ShopItem = (props) => {
    return <div className={'shop'}>
        <div className={'shop__products'}>
            <div className={'shop__products__title'}>Pen</div>
            <img className={'shop__products__img'} src={props.src} alt=""/>
        </div>
        <span className={'shop__product__price'}>Price: {props.price} грн </span> <br/>
        {props.hasDiscount ? <span>!Discount! = {props.discount} %</span> : <span>Discount will be soon</span>}
        <button className={'shop__button'}
                onClick={() => props.addProduct(props.id, props.src, props.name, props.price, props.discount, props.hasDiscount)}>Add
            to <ShoppingCartOutlined/></button>

    </div>
}
export default ShopItem