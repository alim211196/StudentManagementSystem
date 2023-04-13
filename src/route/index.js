import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
const Dashboard = lazy(() => import("../components/Dashboard/index"));
const View = lazy(() => import("../components/ViewRecords/index"));
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

const RouteIndex = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/view-records" element={<View />} />
          <Route exact path="/edit-profile" element={<EditProfile />} />
          <Route exact path="/view-messages" element={<ViewMessage />} />
        </Route>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/sign_in" element={<Login />} />
          <Route exact path="/sign_up" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/contact" element={<Contact />} /> */}
        </Route>
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteIndex;
