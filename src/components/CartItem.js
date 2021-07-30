import React, { Component } from 'react';
import CakeTwo from '../images/cake-two.png'
import CakeFive from '../images/cake-five.png'
import CakeSix from '../images/cake-six.png'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

class CartItem extends Component {
  render() {
    return (
      <Container >

    <div className="mr-auto ml-auto text-left" style={{margin: '2px'}}>
        <Card className="card bg-light mt-4" style={{borderStyle: 'none', textAlign: 'left'}}>

        <Card.Body className="card-body d-flex justify-content-between align-items-center align-items-md-center">
                <div style={{width: '131px'}}><img className="col-12" alt='cake' src={CakeSix}/></div>
                <div className="col-7 col-sm-9 col-md-9 col-lg-10 text-left" style={{paddingLeft: '12px'}}>
                    <Card.Title className='text-dark'>Card Title</Card.Title>
                       <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted">₦ 6000</Card.Subtitle>
                </div>
                <div className="d-flex align-items-md-center align-items-lg-center d-none d-md-flex"><b>1</b>
                <span className="d-flex flex-column justify-content-xxl-center align-items-xxl-center"
                 style={{paddingRight: '0px', paddingLeft: '19px'}}>
                 <FontAwesomeIcon icon={faPlusCircle} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                 <FontAwesomeIcon icon={faMinusCircle} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                 </span>
            </div>
        </Card.Body>

            <Card.Footer className="d-flex justify-content-between align-items-center justify-content-md-end" >
                <div className="d-flex d-md-none align-items-center" style={{paddingRight: '15px', paddingLeft: '15px'}}>
                <FontAwesomeIcon icon={faMinusCircle} size='lg' className='text-secondary'/>
                <input type="text" className="bg-light text-secondary m-3 mt-0 mb-0" style={{width: '70px', marginLeft: '0px', marginRight: '0px', borderRadius: '25px', paddingLeft: '30px', border: '1px none gray', fontWeight: 'bold'}} value="1"/>
                <FontAwesomeIcon icon={faPlusCircle}  size='lg' className='text-secondary'/>
                </div>
                <div className="d-flex justify-content-center text-secondary">
                 <FontAwesomeIcon icon={faTrash} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                    <p style={{paddingLeft: '12px', paddingRight: '0px', fontWeight: 'bold'}}>REMOVE</p>
                </div>
            </Card.Footer>
        </Card>


     <Card className="card bg-light mt-4" style={{borderStyle: 'none', textAlign: 'left'}}>

        <Card.Body className="card-body d-flex justify-content-between align-items-center align-items-md-center">
                <div style={{width: '131px'}}><img className="col-12" alt='cake' src={CakeTwo}/></div>
                <div className="col-7 col-sm-9 col-md-9 col-lg-10 text-left" style={{paddingLeft: '12px'}}>
                    <Card.Title className='text-dark'>Card Title</Card.Title>
                       <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted">₦ 6000</Card.Subtitle>
                </div>
                <div className="d-flex align-items-md-center align-items-lg-center d-none d-md-flex"><b>2</b>
                <span className="d-flex flex-column justify-content-xxl-center align-items-xxl-center"
                 style={{paddingRight: '0px', paddingLeft: '19px'}}>
                 <FontAwesomeIcon icon={faPlusCircle} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                 <FontAwesomeIcon icon={faMinusCircle} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                 </span>
            </div>
        </Card.Body>

            <Card.Footer className="d-flex justify-content-between align-items-center justify-content-md-end" >
           <div className="d-flex d-md-none align-items-center" style={{paddingRight: '15px', paddingLeft: '15px'}}>
                <FontAwesomeIcon icon={faMinusCircle} size='lg' className='text-secondary'/>
                <input type="text" className="bg-light text-secondary m-3 mt-0 mb-0" style={{width: '70px', marginLeft: '0px', marginRight: '0px', borderRadius: '25px', paddingLeft: '30px', border: '1px none gray', fontWeight: 'bold'}} value="2"/>
                <FontAwesomeIcon icon={faPlusCircle}  size='lg' className='text-secondary'/>
                </div>
                <div className="d-flex justify-content-center text-secondary">
                 <FontAwesomeIcon icon={faTrash} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                    <p style={{paddingLeft: '12px', paddingRight: '0px', fontWeight: 'bold'}}>REMOVE</p>
                </div>
            </Card.Footer>
        </Card>


          <Card className="card bg-light mt-4" style={{borderStyle: 'none', textAlign: 'left'}}>

        <Card.Body className="card-body d-flex justify-content-between align-items-center align-items-md-center">
                <div style={{width: '131px'}}><img className="col-12" alt='cake' src={CakeFive}/></div>
                <div className="col-7 col-sm-9 col-md-9 col-lg-10 text-left pl-4" style={{paddingLeft: '18px'}}>
                    <Card.Title className='text-dark'>Card Title</Card.Title>
                       <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted">₦ 6000</Card.Subtitle>
                </div>
                <div className="d-flex align-items-md-center align-items-lg-center d-none d-md-flex"><b>4</b>
                <span className="d-flex flex-column justify-content-xxl-center align-items-xxl-center"
                 style={{paddingRight: '0px', paddingLeft: '19px'}}>
                 <FontAwesomeIcon icon={faPlusCircle} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                 <FontAwesomeIcon icon={faMinusCircle} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                 </span>
            </div>
        </Card.Body>

            <Card.Footer className="d-flex justify-content-between align-items-center justify-content-md-end">
             <div className="d-flex d-md-none align-items-center" style={{paddingRight: '15px', paddingLeft: '15px'}}>
                <FontAwesomeIcon icon={faMinusCircle} size='lg' className='text-secondary'/>
                <input type="text" className="bg-light text-secondary m-3 mt-0 mb-0" style={{width: '70px', marginLeft: '0px', marginRight: '0px', borderRadius: '25px', paddingLeft: '30px', border: '1px none gray', fontWeight: 'bold'}} value="4"/>
                <FontAwesomeIcon icon={faPlusCircle}  size='lg' className='text-secondary'/>
                </div>
                <div className="d-flex justify-content-center text-secondary">
                 <FontAwesomeIcon icon={faTrash} style={{paddingBottom: '9px'}} size='2x' className='text-secondary'/>
                    <p style={{paddingLeft: '12px', paddingRight: '0px', fontWeight: 'bold'}}>REMOVE</p>
                </div>
            </Card.Footer>
        </Card>
    </div>

    <Container className="mt-3 container d-flex justify-content-between align-items-start" style={{marginLeft: '21px', marginRight: '0', width: 'auto'}}>
    <a className="nav-item text-decoration-none text-secondary d-flex" href="/" style={{ fontWeight: 'bold'}}>
                 <FontAwesomeIcon icon={faLongArrowAltLeft} style={{paddingBottom: '9px', paddingRight: '9px'}} size='2x' className='text-secondary'/>Back</a>
        <div className="d-flex justify-content-end align-items-start" style={{width: '203px'}}>
         <p style={{marginRight: '15px'}}><b>Total:</b></p>
         <input type="text" class="col-6 col-sm-6 col-md-8 text-dark" value="18 000 NGN" style={{background: 'transparent', borderStyle: 'none', fontWeight: 'bold'}}/></div>
      </Container>
        </Container>
    );
  }
}

export default CartItem;