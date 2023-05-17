import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';

const Checkout = () => {
	const totalQty = useSelector((state) => state.cart.totalQuantity);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  console.log(`name: ${name}`);
  console.log(`email: ${email}`);
  console.log(`phoneNumber: ${phoneNumber}`);
  console.log(`address: ${address}`);
  console.log(`city: ${city}`);
  console.log(`country: ${country}`);

  // console.log(`totalQty: ${totalQty}`);
  // console.log(`totalAmount: ${totalAmount}`);
  
	const order = async (e) => {
		e.preventDefault();

		try {
			await db.collection('orders').add({
				name,
				email,
				phoneNumber,
				address,
				city,
				country,
				// totalQty,
				// totalAmount,
			});

			toast.success('Your order has been successfully completed');
		} catch (error) {
			toast.error('Order execution error');
            console.log(error);
		}
	};

	return (
		<Helmet title='Checkout'>
			<CommonSection title='Checkout' />
			<section>
				<Container>
					<Row>
						<Col lg='8'>
							<h6 className='mb-4 fw-bold'>Billing Information</h6>
							<Form className='billing__form'>
								<FormGroup className='form__group'>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  placeholder='Enter your name'
                  required
                />
								</FormGroup>
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setEmail(e.target.value)}
										type='email'
										placeholder='Enter your email'
										required
									/>
								</FormGroup>
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setPhoneNumber(e.target.value)}
										type='number'
										placeholder='Phone number'
										required
									/>
								</FormGroup>
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setAddress(e.target.value)}
										type='text'
										placeholder='Address'
										required
									/>
								</FormGroup>
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setCity(e.target.value)}
										type='text'
										placeholder='City'
										required
									/>
								</FormGroup>
								{/* <FormGroup className="form__group">
                  <input type="text" placeholder='Postal code' required />
                </FormGroup> */}
								<FormGroup className='form__group'>
									<input
                    onChange={(e) => setCountry(e.target.value)}
										type='text'
										placeholder='Country'
										required
									/>
								</FormGroup>
							</Form>
						</Col>
						<Col lg='4'>
							<div className='checkout__cart'>
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
								<button
									type='submit'
									style={{
										background: 'white',
										color: 'var(--primary-color)',
										fontWeight: '600',
									}}
									className='buy_btn auth_btn w-100'
									onClick={order}
								>
									Place and order
								</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Checkout;