import homepage from "../images/homepage.png";
import view from "../images/view.png";
import editUser from "../images/editUser.png";
import viewMsg from '../images/viewMsg.png'
import user from "../images/admin.png";
import userReg from "../images/Register.png";
export const navLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: homepage,
    LoggedIn: true,
  },
  {
    title: "View Records",
    path: "/view-records",
    icon: view,
    LoggedIn: true,
  },
  {
    title: "Edit Profile",
    path: "/edit-profile",
    icon: editUser,
    LoggedIn: true,
  },
  {
    title: "View Messages",
    path: "/view-messages",
    icon: viewMsg,
    LoggedIn: true,
  },
  {
    title: "Home",
    path: "/",
    icon: homepage,
    LoggedIn: false,
  },
  {
    title: "Sign in",
    path: "/sign_in",
    icon: user,
    LoggedIn: false,
  },
  {
    title: "Sign up",
    path: "/sign_up",
    icon: userReg,
    LoggedIn: false,
  },
];
