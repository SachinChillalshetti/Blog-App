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
const Education = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col>
            <Card color="dark" outline>
              <CardHeader>
                <h3> Education Blog 1</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text">Inside Higher Ed</Label>

                    <p>
                      This is a great source of content for anyone in higher
                      education, including those looking for jobs. They have
                      sections including Admissions, Books, Technology, Career
                      Advice, and Diversity. They also offer a number of
                      webinars and research in the higher ed space. Their most
                      recent study was on Federal Accountability and Financial
                      Pressure which surveyed college and university presidents.
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
                <h3> Education Blog 2</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text">The Learning Network </Label>
                    <p>
                      This blog is under the New York Times umbrella. Their main
                      audiences are teachers, students, and parents that want to
                      use the NYTs content as inspiration for teaching
                      materials. Teachers can use the section "Text to text" as
                      lesson plans in areas such as American History, Civics,
                      Current Events, and Social Studies. Students can also
                      comment on stories in the Student Opinion section, as long
                      as they're 13 years or older.
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
                <h3> Education Blog 3</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text"> Classroom 2.0</Label>
                    <p>
                      This blog is focused on bringing social media and web 2.0
                      into the classroom. It's not just a destination for
                      content, but also acts as a social network for educators
                      that are looking to learn more about integrating online
                      strategies into their classrooms. They have groups at
                      different schools that you can join and interact with, as
                      well as many educational videos. They have over 78,000
                      members from 199 countries which really provides a variety
                      of perspectives on education.
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

export default Education;
