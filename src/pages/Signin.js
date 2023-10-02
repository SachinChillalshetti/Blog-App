import { Button, Card,CardBody,CardHeader,Col,Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { signup } from "../srevices/user-service";

const Signup=()=>{

   

   const [data,setData]=useState({

      name:'',
      email:'',
      password:'',
      


   })

   const [error,setError]=useState({
      errors:{},
      isError:false
   })

   useEffect(()=>{
      console.log(data);
   },[data])

   const handleChange=(event,property)=>{
     setData({...data,[property]:event.target.value})

   }



      const resetData=()=>{
         setData({
            name:'',
      email:'',
      password:'',
         })
      }

      const submitForm=(event)=>{
         event.preventDefault()

         console.log(data);

         signup(data).then((resp)=>{
            console.log(resp)
            console.log("success log")
         }).catch((error)=>{
            console.log(error)
            console.log("error log")
         })

      }


    return(
      <Base>
      

      <Container>

      <Row className="mt-4">

         { JSON.stringify(data)}

         <Col  sm={{size:6,offset:3}} >
         <Card color="dark" outline>
            <CardHeader>

              <h3> Fill Information to register !!</h3>

            </CardHeader>
            <CardBody>

               <Form onSubmit={submitForm}>

                  <FormGroup>
                        <Label for="name">
                           Enter Name
                        </Label>
                        <Input
                         type="text"
                         placeholder="enter here"
                         id="name"
                         onChange={(e)=>handleChange(e, 'name')}
                         value={data.name}
                        />
                  </FormGroup>

                  <FormGroup>
                        <Label for="email">
                           Enter email
                        </Label>
                        <Input
                         type="email"
                         placeholder="enter here"
                         id="email"
                         onChange={(e)=>handleChange(e, 'email')}
                         value={data.email}

                        />
                  </FormGroup>


                  <FormGroup>
                        <Label for="password">
                           Enter password
                        </Label>
                        <Input
                         type="password"
                         placeholder="enter here"
                         id="password"
                         onChange={(e)=>handleChange(e, 'password')}
                         value={data.password}

                        />
                  </FormGroup>


                  <Container className="text-center">

                        <Button color="dark">Register</Button>
                        <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>

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
    
    export default Signup;