import reducers from "../Reducer/Combinedreducer";
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux"
import { TypeOf } from "yup";


export const Store = createStore(reducers, applyMiddleware(ReduxThunk));

export type AppDispatch = typeof Store.dispatch;

