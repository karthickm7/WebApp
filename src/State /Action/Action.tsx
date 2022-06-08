import axios from "axios";
import { Dispatch } from "redux";
import { Istate } from "../../Components/Register/Signup";
import { Istates } from "../../Components/Login/Login";
import Token from "../../TokenService/Token";

export const POST_SIGNUSER = "POST_SIGNUSER";
export const FETCH_SIGNUSER = "FETCH_SIGNUSER";
export const DELETE_USER = "DELETE_USER";
export const POST_LOGUSER = "POST_LOGUSER";

export const adduser = (values: Istate) => {
  console.log(values, "signpost");
  return async (dispatch: Dispatch) => {
    await axios
      .post("http://localhost:3016/signup", values)
      .then((res) => {
      
        console.log(res, "post res");

        dispatch({ type: POST_SIGNUSER, payload: values });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const adduserlogin = (values: Istates) => {
  console.log(values, "logpost");
  return async (dispatch: Dispatch) => {
    await axios
      .post("http://localhost:3016/login",values)
      .then((res) => {
        console.log(res, "post res");
        Token.setAccessToken(res.data.message.token);
        Token.setRefreshToken(res.data.message.refreshToken)

        dispatch({ type: POST_LOGUSER, payload: values });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getuser = () => {
  return async (dispatch: Dispatch) => {
    try {
      let res = await axios.get("http://localhost:3016/home", {
        headers: { "x-access-token": Token.getAccessToken() },
      })
      dispatch({ type: FETCH_SIGNUSER, payload: res.data });
      console.log(res.data, "getres");
    } catch (err) {
      console.log(err);
      alert("error handling");
    } finally {
      console.log("welcome finally");
    }
  };
};

// export const removeuser = (data: any) => {
//   return async (dispatch: Dispatch) => {
//     await axios
//       .delete(`http://localhost:3019/home/${data}`)
//       .then((res) => {
//         console.log(res, "Deleteresponse");
//         dispatch({ type: DELETE_USER, payload: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const putuser = (edituser: any, id: string | number) => {
//   console.log(edituser, id);
//   return async (dispatch: Dispatch) => {
//     await axios
//       .put(`http://localhost:3019/home/${id}`, edituser)

//       .then((res) => {
//         console.log(res, "putf");
//         //dispatch(fetchfood());
//         console.log("edit", edituser);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
