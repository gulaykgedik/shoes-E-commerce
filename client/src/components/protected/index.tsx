import { FC } from "react";
import Header from "../header";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Loader from "../loader";

interface ProtectedProps {
  allowedRoles?: string[];
}

const Protected: FC<ProtectedProps> = ({ allowedRoles }) => {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <Loader />;

  if (allowedRoles && !allowedRoles.includes(user?.role))
    return <Navigate to="/login" />;

  if (user)
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );

  if (error) return <Navigate to="/login" />;
};

export default Protected;
