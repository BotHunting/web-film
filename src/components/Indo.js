import { Card, Container, Row, Col, Image } from "react-bootstrap"
import akadImage from "../assets/Image/Indo/akad.jpg"
import backstageImage from "../assets/Image/Indo/backstage.jpg"
import kamusendiriImage from "../assets/Image/Indo/kamusendiri.jpg"
import kknImage from "../assets/Image/Indo/kkn.jpg"
import paranoiaImage from "../assets/Image/Indo/paranoia.jpg"
import tekatekiImage from "../assets/Image/Indo/tekateki.jpg"

const Indo = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">INDO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="indo">
                        <Card className="movieImage">
                        <Image src={akadImage} alt="Akad Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">AKAD</Card.Title>
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
                        <Image src={backstageImage} alt="Backstage Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">BACKSTAGE</Card.Title>
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
                        <Image src={kamusendiriImage} alt="Kamu Sendiri Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">KAMU TIDAK SENDIRI</Card.Title>
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
                        <Image src={kknImage} alt="KKN Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">KKN 2</Card.Title>
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
                        <Image src={paranoiaImage} alt="Paranoia Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">PARANOIA</Card.Title>
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
                        <Image src={tekatekiImage} alt="Teka Teki Movies" classname="images" />
                           <div className="bg-dark">
                               <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">TEKA-TEKI TIKA</Card.Title>
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

export default Indo