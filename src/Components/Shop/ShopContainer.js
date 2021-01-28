import React from 'react';
import Shop from "./Shop";
import products from "../../Redux/products";
import {connect} from "react-redux";
import {addProduct} from "../../Redux/products-reducer";

class ShopContainer extends React.Component {

    render() {
        return <Shop {...this.props} />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (id, src, name, price) => {
            dispatch(addProduct(id, src, name, price))
        }
    }
}
const mapStateToProps = () => ({
    products
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
