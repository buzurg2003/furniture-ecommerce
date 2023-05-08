import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  const order = async(e) => {
    toast.success('Your product ordered!')
  }

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Enter your name' required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder='Enter your email' required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder='Phone number' required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Address' required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='City' required />
                </FormGroup>
                {/* <FormGroup className="form__group">
                  <input type="text" placeholder='Postal code' required />
                </FormGroup> */}
                <FormGroup className="form__group">
                  <input type="text" placeholder='Country' required />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>{totalAmount} KZT</span>
                </h6>
                {/* <h6>
                  <span>Shipping: <br />free shipping</span><span>0 KZT</span>
                </h6> */}
                <h4>
                  Total Cost: <span>{totalAmount} KZT</span>
                </h4>
                <button type='submit' style={{background: 'white', color: 'var(--primary-color)', fontWeight: '600'}} className="buy__btn auth__btn w-100" onClick={order}>
                  Place and order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout