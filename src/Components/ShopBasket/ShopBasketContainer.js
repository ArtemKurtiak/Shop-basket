import React from 'react'
import {connect} from "react-redux";

class ShopBasketContainer extends React.Component {
    render() {
        return <ShopBasketContainer {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    productsInBasket: state.products.productsInBasket
})
export default connect(mapStateToProps, {})(ShopBasketContainer);
