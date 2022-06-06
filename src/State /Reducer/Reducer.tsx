import { FETCH_SIGNUSER, POST_SIGNUSER} from "../Action/Action";


const intialState = {
    user: [],
    
  };
export const Reducer = (state = intialState, action: { type: any,payload: any; }) => {
    console.log("testforaction",state,action)
    switch (action.type) {
      case FETCH_SIGNUSER:
        console.log(action, 'reducer');
        return { ...state, user:action.payload };
      case POST_SIGNUSER:
        return { ...state, user:action.payload };
      // case DELETE_USER:
      //   return state.filter((user:any) => user!== action.payload);
       default:
        return state;
    }
  };