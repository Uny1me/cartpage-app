import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CakeSix from '../images/cake-six.png'
// Bootstrap Items
import { Card, Image, ListGroup, Container } from 'react-bootstrap';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

class Product extends Component {
    render() {
        return (
            <div>
                <div className='product-body p-2 pt-0'>
                    <Container className="d-flex justify-content-between align-items-start p-2 pt-4 flex-column flex-md-row">
                        <Card>
                            <Image className="card-img-top w-100 d-block" src={CakeSix} alt='Cake' />
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Twenties Mix</h6>
                                    <h6 className="text-muted mb-2">₦ 20,000</h6>
                                </div>
                                <p className="card-text text-muted">The ideal birthday cake to celebrate your journey into your twenties</p>
                            </Card.Body>
                        </Card>

                        <div className="mar-shift">
                            <Card className="flex-grow-1 mt-4 mt-md-0">
                                <h5 className="card-header">Details</h5>
                                <Card.Body>
                                    <Card.Text>A sweet, baked, breadlike food, made with or without shortening, <br />and usually containing flour, sugar, baking powder or soda, eggs, and liquid flavoring</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Container>

                    <Container className="d-flex justify-content-between align-items-start p-2 pt-4 flex-column flex-md-row">
                        <Card className="flex-grow-1 col-12 col-md-6">
                            <h5 className="card-header">Specifications</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item><span className='text-muted'>Diameter:</span> 6 inches</ListGroup.Item>
                                <ListGroup.Item><span className='text-muted'>Height:</span> 14 inches</ListGroup.Item>
                                <ListGroup.Item><span className='text-muted'>Flavour:</span> Chocolate and Vanilla</ListGroup.Item>
                            </ListGroup>

                        </Card>
                        <Card className="card flex-grow-1 mar-shift mt-4 mt-md-0 col-12 col-md-6">
                            <h5 className="card-header">Logistics</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item><span className='text-muted'>Logistics:</span> We get the job done, on time and at a reasonable cost.</ListGroup.Item>
                                <ListGroup.Item><span className='text-muted'>Delivery:</span> Door delivery available</ListGroup.Item>
                                <ListGroup.Item><span className='text-muted'>Payment:</span> Online Payment only</ListGroup.Item>
                            </ListGroup>

                        </Card>
                    </Container>

                    <Container className="col-12 mt-4">
                        <Link className="btn col-12 pt-2 pb-2 text-white btn-yefepere" to="/" >Add To Cart
                            <FontAwesomeIcon icon={faCartPlus} style={{ marginLeft: '12px' }} size='lg' />
                        </Link>

                        <Link className="btn col-12 mt-3  pt-2 pb-2 text-white btn-yefepere" to="/" >
                            Share My Bill
                            <FontAwesomeIcon icon={faMoneyBillAlt} style={{ marginLeft: '12px' }} size='lg' />
                        </Link>
                    </Container>
                </div>
            </div >

        );
    }
}

export default Product;