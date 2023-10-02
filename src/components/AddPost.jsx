import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap";

const AddPost=()=>{
    return(

        <div className="wrapper">

        <Card className="shadow">
            <CardBody>
                <h3>what's going in your mind</h3>
                <Form>
                    <div className="my-3">
                        <Label for="Content">Post Content</Label>
                        <Input type="textarea" id="Content" placeholder="Enter Here" className="rounded-0" style={{height:'280px'}}/>
                    </div>
                    
                    <div className="my-3">
                        <Label for="category">Post category</Label>
                        <Input type="select" id="category" placeholder="Enter Here" className="rounded-0" >
                            <option>
                                Programing
                            </option>
                            <option>
                                sports
                            </option>
                            <option>
                                politics
                            </option>
                            <option>
                                entertainment
                            </option>
                        </Input>
                    </div>
                    <div className="my-3">
                        <Label for="Content">Author Name</Label>
                        <Input type="textarea" id="Content" placeholder="Enter Here" className="rounded-0" />
                    </div>
                    <Container className="text-center">
                        <Button className="rounded-0" color="primary">Create Post</Button>
                        <Button className="rounded-0" ms-2 color="danger">Reset Content</Button>
                    </Container>
                </Form>

            </CardBody>
        </Card>

        </div>
    )
}

export default AddPost;