import './Sidebar.scss'
import {NavLink} from "react-router-dom";
import {ShopOutlined, ShoppingCartOutlined} from "@ant-design/icons";

const Sidebar = () => {
    return <div className={'sidebar'}>
        <div className={'sidebar__route'}>
            <NavLink to={'/shop'} activeClassName={'sidebar__route-active'}>
                <span className={'sidebar__route__title'}>Shop</span>
                <ShopOutlined className={'sidebar__route__icon'}/>
            </NavLink>
        </div>
        <br/>
        <br/>
        <div className={'sidebar__route'}>
            <NavLink to={'/shop_basket'} activeClassName={'sidebar__route-active'}>
                <span className={'sidebar__route__title'}>Shop Basket</span>
                <ShoppingCartOutlined className={'sidebar__route__icon'}/>
            </NavLink>
        </div>

    </div>
}
export default Sidebar