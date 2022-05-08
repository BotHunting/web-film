import { Card, Container, Row, Col, Image } from "react-bootstrap"
import alonggodsImage from "../assets/Image/Luar/alonggods.jpg"
import noahImage from "../assets/Image/Luar/noah.jpg"
import venomImage from "../assets/Image/Luar/venom.jpg"
import badboysImage from "../assets/Image/Luar/badboys.jpg"
import lootcaseImage from "../assets/Image/Luar/lootcase.jpg"
import infernoImage from "../assets/Image/Luar/inferno.jpg"

const Luar = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">LUAR MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="luar">
                        <Card className="movieImage">
                        <Image src={alonggodsImage} alt="Along Gods Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">ALONG WITH THE GODS</Card.Title>
                           <Card.Text classname="text-left">
                               This is a wider card with supporting text below as a natural lead-in to
                               additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={badboysImage} alt="Bad Boys Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BAD BOYS FOR LIFE</Card.Title>
                                <Card.Text classname="text-left">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={noahImage} alt="Noah Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">NOAH</Card.Title>
                                <Card.Text classname="text-left">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={venomImage} alt="Venom Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">VENOM</Card.Title>
                                <Card.Text classname="text-left">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={lootcaseImage} alt="Lootcase Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">LOOTCASE</Card.Title>
                                <Card.Text classname="text-left">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                      </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={infernoImage} alt="Inferno Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">INFERNO</Card.Title>
                                <Card.Text classname="text-left">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                      </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Luar