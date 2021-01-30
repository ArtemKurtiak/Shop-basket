import React from 'react'
import {connect} from "react-redux";
import ShopBasket from "./ShopBasket";

class ShopBasketContainer extends React.Component {
    render() {
        return <ShopBasket {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    productsInBasket: state.products.productsInBasket
})
export default connect(mapStateToProps, {})(ShopBasketContainer);
