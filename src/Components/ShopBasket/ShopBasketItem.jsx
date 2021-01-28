import s from '../Shop/Shop.module.css'


const ShopBasketItem = (props) => {
    return <div className={s.wrapper_product}>
        <div className={s.products}>
            <div className={s.desc}>Pen</div>
            <img className={s.img_product} src={props.src} alt=""/></div>
        <span>Price: {props.price} грн</span>


    </div>
}
export default ShopBasketItem