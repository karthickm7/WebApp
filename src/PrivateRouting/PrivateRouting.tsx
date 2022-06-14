import { Navigate } from "react-router-dom";
import Token from "../TokenService/Token";

//  function PrivateRouting({ children:any}) {
//   const auth= Token.getAccessToken();
//   return auth ? children : <Navigate to="/login" />;
// }

const PrivateRouting = ({ children }: any) => {
  const auth = Token.getAccessToken();
  console.log(Object.keys(auth).length);

  return Object.keys(auth).length !== 0 ? children : <Navigate to="/login" />;
};
export default PrivateRouting;
