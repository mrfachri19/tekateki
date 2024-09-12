import { Navigate } from 'react-router-dom';
import { getToken } from "../storage";

const Private = ({Component}) => {
  const auth = getToken()
  return auth ? <Component /> : <Navigate to="/login" />
}
export default Private
