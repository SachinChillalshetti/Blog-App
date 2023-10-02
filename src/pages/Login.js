import { Card, CardBody,FormGroup,Label,Input, CardHeader, Col, Container, Form, Row, Button } from "reactstrap";
import Base from "../components/Base";

const Login=()=>{
    return(
      <Base>
       
        <Container>

         <Row className="mt-4">

            <Col sm={{size:6,offset:3}}>
            
               <Card color="dark" outline>
                  <CardHeader>
                     <h3>login here</h3>
                  </CardHeader>
                  <CardBody>
                     <Form>
                     <FormGroup>
                        <Label for="email">
                           Enter Email
                        </Label>
                        <Input
                         type="text"
                         id="email"
                        />
                  </FormGroup>
                     <FormGroup>
                        <Label for="password">
                           Enter password
                        </Label>
                        <Input
                         type="password"
                         id="password"
                        />
                  </FormGroup>

                     <Container className="text-center">
                        <Button color="dark">
                           Login
                        </Button>
                        <Button className="ms-2" color="secondary">
                           Reset
                        </Button>
                     </Container>

                     </Form>
                  </CardBody>
               </Card>

            </Col>

         </Row>

        </Container>


       </Base>
    );
    };
    
    export default Login;