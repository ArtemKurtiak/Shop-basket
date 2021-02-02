import s from './Shop.module.css'
import {ShoppingCartOutlined} from "@ant-design/icons";

const ShopItem = (props) => {
    return <div className={s.wrapper_product}>
        <div className={s.products}>
            <div className={s.desc}>Pen</div>
            <img className={s.img_product} src={props.src} alt=""/></div>
        <span>Price: {props.price} грн </span> <br/>
        {props.hasDiscount ? <span>!Discount! = {props.discount} %</span> : <span>Discount will be soon</span>}
        <button className={s.basket_button}
                onClick={() => props.addProduct(props.id, props.src, props.name, props.price, props.discount, props.hasDiscount)}>Add
            to <ShoppingCartOutlined/></button>

    </div>
}
export default ShopItem