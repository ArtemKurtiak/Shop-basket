import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {ShopOutlined, ShoppingCartOutlined} from "@ant-design/icons";

const Sidebar = () => {
    return <div className={s.app_sidebar}>
        <div className={s.wrapper}>


            <div className={s.item}>
                <NavLink to={'/shop'} activeClassName={s.activeLink}><span className={s.desc}>Shop</span> <ShopOutlined
                    className={s.basket_item}
                /></NavLink>
            </div>
            <br/>
            <br/>
            <div className={s.item}>
                <NavLink to={'/shop_basket'} activeClassName={s.activeLink}><span className={s.desc}>Shop Basket</span>
                    <ShoppingCartOutlined
                        className={s.basket_item}/></NavLink>
            </div>

        </div>
    </div>
}
export default Sidebar