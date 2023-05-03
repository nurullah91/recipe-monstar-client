import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <p className='text-7xl font-bold'>L</p>
            <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-pink-600'></div>
            <p className='text-7xl font-bold'>ading....</p>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace ></Navigate>;
};

export default PrivateRoute;