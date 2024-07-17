import {Navigate, useLocation} from "react-router-dom";
import {useParams} from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user} = useParams();
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
