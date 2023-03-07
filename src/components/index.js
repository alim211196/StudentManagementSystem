// import React, { useEffect, useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import GlobalStyles from "@mui/material/GlobalStyles";
// import Container from "@mui/material/Container";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import MenuIcon from "@mui/icons-material/Menu";
// import IconButton from "@mui/material/IconButton";
// import Collapse from "@mui/material/Collapse";

// const tiers = [
//   {
//     name: "John Doe",
//     salary: "1000",
//     position: "UI Developer",
//     buttonVariant: "contained",
//     info: [
//       {
//         email: "john.doe@ascendtek.com",
//         phone: "8180036208",
//         city: "Pune",
//       },
//     ],
//   },
//   {
//     name: "John Doe",
//     salary: "1000",
//     position: "UI Developer",
//     buttonVariant: "contained",
//     info: [
//       {
//         email: "john.doe@ascendtek.com",
//         phone: "8180036208",
//         city: "Pune",
//       },
//     ],
//   },
// ];

// const RecordContent = () => {
//   const matches = useMediaQuery("(min-width:500px)");
//   const logoname = "AscendtekEmpinfo";
//   const [updown, setupdown] = useState(false)

//   return (
//     <React.Fragment>
//       <GlobalStyles
//         styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
//       />
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         color="default"
//         elevation={0}
//         sx={{
//           borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
//           background: "#0a1929",
//           color: "#fff",
//         }}
//       >
//         <Toolbar sx={{ flexWrap: "wrap" }}>
//           <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
//             {logoname}
//           </Typography>
//           {!matches ? (
//             <IconButton aria-label="menu" onClick={() => setupdown(!updown)}>
//               <MenuIcon sx={{ fontSize: "24px", color: "white" }} />
//             </IconButton>
//           ) : (
//             <nav>
//               <Link
//                 variant="button"
//                 color="text.primary"
//                 href="/"
//                 sx={{ my: 1, mx: 1.5, color: "#fff" }}
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 variant="button"
//                 color="text.primary"
//                 href="/view-records"
//                 sx={{ my: 1, mx: 1.5, color: "#fff" }}
//               >
//                 View Records
//               </Link>
//               <Link
//                 variant="button"
//                 color="text.primary"
//                 href="/about"
//                 sx={{ my: 1, mx: 1.5, color: "#fff" }}
//               >
//                 About
//               </Link>
//             </nav>
//           )}
//         </Toolbar>

//         {updown && (
//           <Collapse in={updown} timeout={1000}>
//             {" "}
//             <nav
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Link
//                 variant="button"
//                 color="text.primary"
//                 href="/"
//                 sx={{ my: 1, mx: 1, color: "#fff" }}
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 variant="button"
//                 color="text.primary"
//                 href="/view-records"
//                 sx={{ my: 1, mx: 1, color: "#fff" }}
//               >
//                 View Records
//               </Link>
//               <Link
//                 variant="button"
//                 color="text.primary"
//                 href="/about"
//                 sx={{ my: 1, mx: 1, color: "#fff" }}
//               >
//                 About
//               </Link>
//             </nav>
//           </Collapse>
//         )}
//       </AppBar>
//       <Container maxWidth="lg" component="main" sx={{ padding: "5rem 1rem" }}>
//         <Typography
//           component="h4"
//           variant="h4"
//           align="center"
//           color="text.primary"
//           gutterBottom
//           sx={{ marginBottom: "2rem" }}
//         >
//           Ascendtek employee's records
//         </Typography>
//         <Grid container spacing={5} alignItems="flex-end">
//           {tiers.map((tier, index) => (
//             // Enterprise card is full width at sm breakpoint
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card>
//                 <CardHeader
//                   title={tier.name}
//                   subheader={tier.position}
//                   titleTypographyProps={{ align: "center" }}
//                   subheaderTypographyProps={{
//                     align: "center",
//                   }}
//                   sx={{
//                     backgroundColor: (theme) =>
//                       theme.palette.mode === "light"
//                         ? theme.palette.grey[200]
//                         : theme.palette.grey[700],
//                   }}
//                 />
//                 <CardContent>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "baseline",
//                       mb: 2,
//                     }}
//                   >
//                     <Typography
//                       component="h2"
//                       variant="h3"
//                       color="text.primary"
//                     >
//                       ${tier.salary}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary">
//                       /mo
//                     </Typography>
//                   </Box>
//                   <ul>
//                     {Object.values(tiers[0].info[0]).map((item, index) => (
//                       <Typography
//                         component="li"
//                         variant="subtitle1"
//                         align="center"
//                         key={index}
//                         sx={{ fontSize: 15 }}
//                       >
//                         {item}
//                       </Typography>
//                     ))}
//                   </ul>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     fullWidth
//                     variant={tier.buttonVariant}
//                     color="success"
//                   >
//                     Edit
//                   </Button>
//                   <Button fullWidth variant={tier.buttonVariant} color="error">
//                     Delete
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Toolbar
//         sx={{
//           flexWrap: "wrap",
//           background: "#0a1929",
//           position: "fixed",
//           right: 0,
//           bottom: 0,
//           width: "100%",
//         }}
//       >
//         <Typography
//           variant="h6"
//           color="inherit"
//           noWrap
//           sx={{ flexGrow: 1, textAlign: "center", color: "#fff" }}
//         >
//           {logoname}
//         </Typography>
//       </Toolbar>
//     </React.Fragment>
//   );
// };

// export default function viewRecord() {
//   return <RecordContent />;
// }
