import { Navigate } from "react-router-dom";

// Used so that user cannot acces a page that is
// wrapped in this component redirects user to login page
function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;