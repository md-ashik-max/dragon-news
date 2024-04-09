import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loading){
        return <div className="text-center mt-64"> <span className="loading loading-spinner text-success"></span></div>
    }
    if(user){
        return children;
    }
    return (<Navigate state={location.pathname} to="/login"></Navigate>);
};

export default PrivetRoutes;
PrivetRoutes.propTypes = {
    children:PropTypes.node
}