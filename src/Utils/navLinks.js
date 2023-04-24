import {
  HowToReg,
  Dashboard,
  PersonAddAlt1,
  PersonSearch,
  AccountCircle,
  Sms,
  Home,
  Login,
} from "@mui/icons-material";
export const navLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Dashboard />,
    LoggedIn: true,
  },
  {
    title: "Add Student",
    path: "/add-student",
    icon: <PersonAddAlt1 />,
    LoggedIn: true,
  },
  {
    title: "View Students",
    path: "/view-students",
    icon: <PersonSearch />,
    LoggedIn: true,
  },
  {
    title: "Edit Profile",
    path: "/edit-profile",
    icon: <AccountCircle />,
    LoggedIn: true,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <Sms />,
    LoggedIn: true,
  },
  {
    title: "Home",
    path: "/",
    icon: <Home />,
    LoggedIn: false,
  },
  {
    title: "Sign in",
    path: "/sign_in",
    icon: <Login />,
    LoggedIn: false,
  },
  {
    title: "Sign up",
    path: "/sign_up",
    icon: <HowToReg />,
    LoggedIn: false,
  },
];
