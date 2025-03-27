import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { Route, Routes, Link } from "react-router-dom";
import UserDetail from "./UserDetail";
import { getUsers } from "../services/userServices";
import { useEffect, useState } from "react";

const User = () => {
    

    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        let response = await getUsers();
        setUsers(await response.data);
    }

    useEffect(() => fetchUsers, []);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>User Page</h1>
                    <p>{users.length}</p>
                    <Row>
                        <Col>
                        <ListGroup>
                            {users.map((user) => (
                                <ListGroup.Item as = {Link} key={user.id} to={`../users/${user.id}`}>
                                    {user.username}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        </Col>
                        <Col>
                        <Routes>
                            <Route path=":id" element={<UserDetail />} /> 
                        </Routes>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </Container>
    )
}

export default User;