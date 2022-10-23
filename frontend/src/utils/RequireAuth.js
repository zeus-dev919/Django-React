import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate, useSearchParams} from "react-router-dom";

export default function requireAuth(Component) {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
      checkAuth();
    }, []);

    const checkAuth = () => {
      if (!isAuthenticated) {
        navigate('login');
      }
    };

    return (
      <div>{isAuthenticated === true ? <Component {...props} /> : null}</div>
    );
  };
  return AuthenticatedComponent;
}
