import React, { useState } from 'react'
import "../Style/Contact.css"
import { Footer } from './Footer'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handlesSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [contact, setContact]=useState({
    email:'',
    mobileno:'',
    firstname:'',
    message:'',
  });
  const [errors, setErrors]=useState({
    mobileno:'',
    email:'',
    server:'',
  });

  const validEmails = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  const validMobileno = (mobileno) => {
    const mobilenoPattern = /^\d{10}$/;
    return mobilenoPattern.test(mobileno);
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    const emailIdvalid = validEmails(contact.email);
    const mobilelenovalid = validMobileno(contact.mobileno);

    setErrors({
      email: emailIdvalid ? '' : 'Please enter a valid email',
      mobileno: mobilelenovalid ? '' : 'Mobileno must be at least 10 numbers',
      server: '',
    });
    if (emailIdvalid && mobilelenovalid) {
      console.log('sumbit successful:', contact);
      setContact({
        
        email:'',
        mobileno:'',
        firstname:'',
        message:'',
      })
    }}
    const handleSubmitOnChange = (e) => {

      const { name, value } = e.target;
      setContact((prevFromData) => ({
        ...prevFromData,
        [name]: value,
      }));
    }
  return (
    <div>
      <div className='imag'>
        <div className='imag-overlay'>
          <h1 className='text-center ' style={{ color: "white" }}>Contact/Home</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="card mt-4">
            <div className="card-header">
              Contact Info
            </div>
            <div className="card-body ">
              <h5 className="card-title">Contact</h5>
              <p className="card-text">  
              <div class="form-group">
                <input type="text" class="form-control" required 
                 value={contact.firstname} name='firstname' onChange={handleSubmitOnChange}
                />
                <lable for="" class="form-lable">Enter Name</lable>

              </div>
              <div class="form-group">
                <input type="email" class="form-control" required
                     value={contact.email} name='email' onChange={handleSubmitOnChange}
                />
  {errors.email && <p className="error text-danger">{errors.email}</p>}
                <lable for="" class="form-lable">Enter Email</lable>
              </div>
              <div class="form-group">
                <input type="number" class="form-control " required
                    value={contact.mobileno} name='mobileno' onChange={handleSubmitOnChange}
                />
                
                <lable for="" class="form-lable">Enter MobileNo</lable>
                {errors.mobileno && <p className="error text-danger ">{errors.mobileno}</p>}
              </div>
              <div class="form-group">
                <textarea type="text" class="form-control" required
                 value={contact.message} name='message' onChange={handleSubmitOnChange}
                />
               
                <lable for="" class="form-lable"
                 >Message</lable>
              </div>
                </p>
              <button  className="btn btn-primary text-end" onClick={handleSubmit}>Sumbit</button>
            </div>
          </div></div>
          <div className="col-sm-4"><div className="card mt-5" >
            <div className="card-body">
              <h5 className="card-title">Contact Infor</h5>

              <p className="card-text"><i className="bi bi-telephone-fill"></i>  +91 8610010780</p>
              <p className="card-text">    <i className="bi bi-envelope-check"></i> skylarkhr@gmail.com</p>
              <h5 className="card-title">Social Network</h5>
              <a href="#" className="me-2"><i className="bi bi-whatsapp" id='whatsapps'></i></a>
            
              <a href="#" className="me-2"><i className="bi bi-facebook" id='facebook'></i></a>
              <a href="#" className="me-2"><i className="bi bi-instagram" id='instagram'></i></a>
              <i class="bi bi-linkedin" id='linkedin'></i>
            </div>
          </div></div>
        </div>
      </div>
      <Form noValidate validated={validated} onSubmit={handlesSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
       
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
        </Form.Group>
      </Row>
      <Button type="submit" className='mt-5'>Submit form</Button>
    </Form>
      <Footer />
    </div>
  )
}
