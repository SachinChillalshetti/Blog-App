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
import Base from "../components/Base";

const About = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col>
            <Card color="dark" outline>
              <CardHeader>
                <h3>Blog 1</h3>
                <h5>Author : J. R. Ackerley </h5>
                <h5>Published : July 2015 </h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text">This is Blog 1</Label>
                    <p>
                      TechCrunch is a blog that provides technology and startup
                      news, from the latest developments in Silicon Valley to
                      venture capital funding. The blog’s target audience is
                      technology and business enthusiasts, especially startup
                      founders and investors worldwide. The TechCrunch website’s
                      clean layout prioritizes text readability with its simple
                      white background and black text. Headlines of the most
                      recent articles are shown neatly on the homepage and
                      accompanied by snippets from the blog posts and relevant
                      pictures to add a splash of color. The TechCrunch website
                      also provides a helpful sidebar on the left side of the
                      screen for easy navigation.The blog’s target audience is
                      technology and business enthusiasts, especially startup
                      founders and investors worldwide. The TechCrunch website’s
                      clean layout prioritizes text readability with its simple
                      white background and black text. Headlines of the most
                      recent articles are shown neatly on the homepage and
                      accompanied by snippets from the blog posts and relevant
                      pictures to add a splash of color.Headlines of the most
                      recent articles are shown neatly on the homepage and
                      accompanied by snippets from the blog posts and relevant
                      pictures to add a splash of color. The TechCrunch website
                      also provides a helpful sidebar on the left side of the
                      screen for easy navigation.
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
                <h3>Blog 2</h3>
                <h5>Author : Martha Ackmann </h5>
                <h5>Published : July 2000 </h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text">This is Blog 2</Label>
                    <p>
                      The blog’s simple black-and-white theme gives it a sleek
                      look fitting for a technology blog. Upon accessing the
                      website, visitors’ eyes are immediately drawn to the
                      collage of photos and headlines of their most recent and
                      popular articles. Further down the page, more article
                      headlines are sorted by the most recent to the oldest and
                      accompanied by a picture and sentence summarizing the
                      article’s content. This lets visitors know that the blog
                      is regularly updated with a variety of content.most recent
                      and popular articles. Further down the page, more article
                      headlines are sorted by the most recent to the oldest and
                      accompanied by a picture and sentence
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
                <h3>Blog 3</h3>
                <h5>Author : Nana Achampong</h5>
                <h5>Published : July 2018 </h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="text">This is Blog 3</Label>
                    <p>
                      Gizmodo’s homepage is very busy yet still organized. It
                      provides as much content as possible in neatly separated
                      sections with different headings, such as Reviews &
                      Gadgets, Science, and Field Guide. Each blog section
                      consists of a collage of various headlines and pictures.
                      The blog also does a great job of emphasizing text
                      readability by using a simple color scheme consisting of
                      black, white, and blue. At the top of the page, there are
                      links to other websites of the same company, promoting the
                      websites and providing easy access to visit them.It
                      provides as much content as possible in neatly separated
                      sections with different headings, such as Reviews &
                      Gadgets, Science, and Field Guide. Each blog section
                      consists of a collage of various headlines and pictures.
                      The blog also does a great job of emphasizing text
                      readability by using a simpleAt the top of the page, there are
                      links to other websites of the same company, promoting the
                      websites and providing easy access to visit them.It
                      provides as much content as possible in neatly separated
                      sections with different headings, such as Reviews &
                      Gadgets, Science, and Field Guide.
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

export default About;
