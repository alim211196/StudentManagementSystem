import {
  HowToReg,
  Dashboard,
  People,
  ManageAccounts,
  Sms,
  Home,
  Login,
  CalendarMonth,
} from "@mui/icons-material";
export const navLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Dashboard />,
    LoggedIn: true,
  },
  {
    title: "Manage Students",
    path: "/manage-students",
    icon: <People />,
    LoggedIn: true,
  },
  {
    title: "Manage Account",
    path: "/manage-account",
    icon: <ManageAccounts />,
    LoggedIn: true,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <Sms />,
    LoggedIn: true,
  },
  {
    title: "Manage Attendance",
    path: "/manage-attendance",
    icon: <CalendarMonth />,
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
