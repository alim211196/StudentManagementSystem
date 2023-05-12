import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
const Dashboard = lazy(() => import("../components/Dashboard/index"));
const ManageStudent = lazy(() => import("../components/ManageStudent/index"));
const Login = lazy(() => import("../components/Login/index"));

const Register = lazy(() => import("../components/Register/index"));

const PageNotFound = lazy(() => import("../Utils/PageNotFound"));

const PrivateRoute = lazy(() => import("../route/PrivateRoute"));

const PublicRoute = lazy(() => import("../route/PublicRoute"));

const ForgotPassword = lazy(() => import("../components/ForgotPassword/index"));

const ResetPassword = lazy(() => import("../components/ResetPassword/index"));

const EditProfile = lazy(() => import("../components/EditProfile"));

const Home = lazy(() => import("../components/Home"));

const ViewMessage = lazy(() => import("../components/ViewMessage"));

const ManageAttendance = lazy(() =>
  import("../components/StudentAttendance/index")
);
const RouteIndex = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/manage-students" element={<ManageStudent />} />
          <Route exact path="/manage-account" element={<EditProfile />} />
          <Route exact path="/messages" element={<ViewMessage />} />
          <Route
            exact
            path="/manage-attendance"
            element={<ManageAttendance />}
          />
        </Route>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/sign_in" element={<Login />} />
          <Route exact path="/sign_up" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
        </Route>
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteIndex;
