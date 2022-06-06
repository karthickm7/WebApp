import reducers from "../Reducer/Combinedreducer";
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux"


export const Store = createStore(reducers, applyMiddleware(ReduxThunk));


