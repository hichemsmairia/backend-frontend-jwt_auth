import React from "react";
import { Navigate } from "react-router-dom";
const token = localStorage.getItem("token");

function ProtectedRoute({ children }) {
  if (!token) {
    return <Navigate to={"/login"} replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
/*


<ProtectedRoute>

 <Home />   

</ProtectedRoute>

*/
