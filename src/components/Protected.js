import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
let auth = false;
const Protected = () => {
  const token = useSelector((state) => state.userToken.token);
  if (token) {
    auth = true;
  }

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
