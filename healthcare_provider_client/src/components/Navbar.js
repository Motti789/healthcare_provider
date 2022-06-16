import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/clients">Clients</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavBar;





































// // src/Navbar.js
// import React from "react";
// import { NavLink } from "react-router-dom";

// const link = {
//   width: "100px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

// class Navbar extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavLink
//           to="/"
//           /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//           exact
//           /* add styling to Navlink */
//           style={link}
//           /* add prop for activeStyle */
//           activeStyle={{
//             background: "darkblue",
//           }}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           exact
//           style={link}
//           activeStyle={{
//             background: "darkblue",
//           }}
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/clients"
//           exact
//           style={link}
//           activeStyle={{
//             background: "darkblue",
//           }}
//         >
//           Clients
//         </NavLink>
//       </div>
//     );
//   }
// }

// export default Navbar;