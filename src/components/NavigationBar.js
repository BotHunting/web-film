import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>HUNTING FILM</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#indo">INDO</Nav.Link>
                        <Nav.Link href="#luar">LUAR</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar