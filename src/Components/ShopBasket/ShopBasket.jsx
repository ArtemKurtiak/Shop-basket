import s from './ShopBasket.module.css'
import ShopBasketItem from "./ShopBasketItem";
import {brown} from "@material-ui/core/colors";

const ShopBasket = (props) => {
    let discounts = [];
    let totalPrice = null;
    let MappingHelper = props.productsInBasket.map(p => {
        totalPrice = totalPrice + p.price
        discounts.push(p.discount)
    })
    let maxDiscount;
    if (discounts.length > 0) {
        maxDiscount = Math.max(...discounts);
    }
    let differencePrice = Math.round(totalPrice / 100 * maxDiscount);
    let currentPrice = totalPrice - differencePrice;
    let BasketItems = props.productsInBasket.map(p => <ShopBasketItem key={p.id} price={p.price} name={p.name}
                                                                      src={p.src} id={p.id}
                                                                      deleteProduct={props.deleteProduct}
                                                                      discount={p.discount}
                                                                      hasDiscount={p.hasDiscount}/>)
    return <div className={s.wrapper}>
        <div className={s.totalPrice}>

            {maxDiscount ?
                <span>Загальна вартість:<span className={s.discount}>{totalPrice > 0 ? totalPrice : 0} грн</span>
                <br/>
            <span>Discount: {maxDiscount} %</span> <span>Загальна вартість: {currentPrice}</span>
            </span> : <div>Загальна вартість: {totalPrice} грн</div>}


        </div>
        {BasketItems}
    </div>
}
export default ShopBasket;