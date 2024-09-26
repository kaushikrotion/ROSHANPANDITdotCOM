import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const NewsletterForm = () => {
    return (
        <div className='form-container'>
            <Form>
                <Form.Group className="mb-3" controlId="formGridFullName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" required controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as = {Col} controlId="formGridPhoneNo">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="1234567890" />
                    </Form.Group>

                    <Form.Group as = {Col} id="fneedServiceCheckbox">
                        <Form.Check type="switch" label="Looking For Service" />
                    </Form.Group>
                </Row>

                <Form.Group className='mb-3' controlId="formGridDesc">
                    <Form.Label>Brief Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Briefly describe the service you need'/>
                </Form.Group>

                <Form.Group className='mb-3' as={Col} id="subscribeNewsletter">
                    <Form.Check type="switch" label="Newsletter Sign UP" />
                </Form.Group>

                <Button className='mb-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default NewsletterForm;
