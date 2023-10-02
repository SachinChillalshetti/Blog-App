import Base from "../components/Base";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  FormGroup,
  Row,
  Label,
} from "reactstrap";
const Sports = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col>
            <Card color="dark" outline>
              <CardHeader>
                <h3> Sports Blog 1</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text">Swimming   Author :Jaafar Abbas  Published : 1990</Label>
                    
                    <p>
                      Coby Carrozza Swims 1:33 200 Freestyle to Beat Luke Hobson
                      at Texas Intrasquad As legendary head coach Eddie Reese
                      begins his final season guiding the Texas men’s swimming
                      program, his group The post Coby Carrozza Swims 1:33 200
                      Freestyle to Beat Luke Hobson at Texas Intrasquad appeared
                      first on Swimming World News.
                    </p>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card color="dark" outline>
              <CardHeader>
                <h3> Sports Blog 2</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text">Football  Author :Thomas Abbt  Published : 1995</Label>
                    <p>
                      Match of the Day's Micah Richards analyses how the
                      performance of Craig Dawson for Wolverhampton Wanderers
                      stopped the attacking threat of Manchester City's Erling
                      Haaland in their 2-1 victory.
                    </p>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card color="dark" outline>
              <CardHeader>
                <h3> Sports Blog 3</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text">Table tennis   Author :Francis Adams  Published : 1895</Label>
                    <p>
                      It is no secret that effective serving can be what makes
                      or breaks a match. It is quite literally the only time in
                      a match that you have complete control of the ball – so
                      you’d better make it count! Table tennis serves matter!
                      Whilst having unorthodox serves certainly places you in a
                      more advantageous position, it is often the bread and
                      butter (the simple serves) that you revert to when things
                      aren’t going your way. It is for this reason, today, I
                      will be discussing three core table tennis serves every
                      player should master.
                    </p>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Sports;
