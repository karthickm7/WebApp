import { FETCH_SIGNUSER, POST_SIGNUSER,POST_LOGUSER} from "../Action/Action";


const intialState = {
    user: [],
    
  };
export const Reducer = (state = intialState, action: { type: any,payload: any; }) => {
    // console.log("testforaction",state,action)
    switch (action.type) {
      case FETCH_SIGNUSER:
        console.table(action.payload);
        return { ...state, user:action.payload };
      case POST_SIGNUSER:
        return { ...state, user:action.payload };
      case POST_LOGUSER:
        return { ...state, user:action.payload };
      // case DELETE_USER:
      //   return state.filter((user:any) => user!== action.payload);
       default:
        return state;
    }
  };