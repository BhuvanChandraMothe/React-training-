import { Row, Col, Container, Navbar, Nav } from "react-bootstrap"
import Home from "./components/Home";
import { Link, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import User from "./components/User";
import UserDetail from "./components/UserDetail";

const App = () => {
  return (
    <Container fluid>
      <Row as='header'>
        <Col>
          <h1> Routing App </h1>
        </Col>
      </Row>
      <Navbar bg="dark" data-bs-theme="dark" className="row">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>NavBar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/features"}>Features</Nav.Link>
            <Nav.Link as={Link} to={"/pricing"}>Pricing</Nav.Link>
            <Nav.Link as={Link} to={"/users"}>Users</Nav.Link>
            <Nav.Link as={Link} to={"/contact"} >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Row>
        <Col>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/users/*" element={<User />} />
              {/* <Route path="/users/:id" element={<UserDetail />} />
            </Route> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />


          </Routes>

        </Col>
      </Row>
    </Container>
  )
}

export default App;