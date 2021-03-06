import ShopItem from "./ShopItem";


const Shop = (props) => {
    let ShopProducts = props.products.map(p =>
        <ShopItem key={p.id} price={p.price} name={p.name} src={p.urlImg} id={p.id} addProduct={props.addProduct}
                  discount={p.discount} hasDiscount={p.hasDiscount}/>
    )
    return <div>
        {ShopProducts}
    </div>
}

export default Shop