import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import {Route} from "react-router";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import ShopContainer from "./Components/Shop/ShopContainer";
import ShopBasketContainer from "./Components/ShopBasket/ShopBasketContainer";


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <div className={'app_wrapper'}>
                    <Header/>
                    <Sidebar/>

                    <div className='app_main'>
                        <Route path="/shop_basket"
                               render={() => <ShopBasketContainer/>}/>
                        <Route path='/shop' render={() => <ShopContainer/>}/>
                    </div>
                </div>
            </Provider>
        </div>
    );
}

export default App;
