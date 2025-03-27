import { Col, Container, Row } from "react-bootstrap"

const NotFound = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 style={{"color" : "red"}}>Its not me, its you</h1>
                    <p style={{"color" : "red"}}>The url is not found</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;