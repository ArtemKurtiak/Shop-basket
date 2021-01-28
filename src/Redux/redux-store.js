import {combineReducers, createStore} from "redux";
import productsReducer from "./products-reducer";

function SaveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function LoadFromLocalStorage(state) {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState == null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e);
        return undefined
    }
}

const rootReducer = combineReducers(
    {products: productsReducer}
)
const PersistedState = LoadFromLocalStorage();

const store = createStore(rootReducer,PersistedState);

store.subscribe(() => SaveToLocalStorage(store.getState()))

window.state = store.getState()

export default store

