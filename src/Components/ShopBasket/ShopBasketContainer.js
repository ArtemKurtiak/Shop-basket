import React from 'react'
import {connect} from "react-redux";
import ShopBasket from "./ShopBasket";
import {deleteProduct} from "../../Redux/products-reducer";


class ShopBasketContainer extends React.Component {
    render() {
        return <ShopBasket {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    productsInBasket: state.products.productsInBasket
})
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (id) => {
            dispatch(deleteProduct(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopBasketContainer);
