import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';

function RequireAuth({ children }) {
    const [user] = useAuthState(auth);
    let location = useLocation();
  
    if (user) {
      return children;
    }
    else{
      return <Navigate to="/login" state={{ from: location }} replace />;

    }
  }

  export default RequireAuth;