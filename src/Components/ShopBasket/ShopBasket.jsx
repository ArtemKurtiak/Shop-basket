import s from './ShopBasket.modue.css'
import ShopBasketItem from "./ShopBasketItem";

const ShopBasket = (props) => {
    console.log(props)
    let BasketItems = props.productsInBasket.map(p => <ShopBasketItem key={p.id} price={p.price} name={p.name}
                                                                      src={p.src} id={p.id}/>)
    return <div className={s.wrapper}>
        {BasketItems}
    </div>
}
export default ShopBasket;