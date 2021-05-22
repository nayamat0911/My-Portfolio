import React from 'react'
import '../Styles/Contact.css'; 
import { Row, Col, Button } from 'reactstrap';
// import Form from 'react-bootstrap/Form'
import { FaBeer, } from 'react-icons/fa';


function Contact() {
    return (
        <div className="contact_section pad_all_sec" >
            <div className="contact_title">
                <h1 className='all_sec_title_1 '>Contact Me</h1>
                <h2 className='all_sec_sub_title_1 some_sub_title'>For Any Others Information I help You</h2>
            </div>
            <div className="contact_into">
                <div className="contact_address">
                    <Row className="address_one_info">
                        <Col >
                        <a href=""><FaBeer/></a><label>Call</label>
                         <p>+880 1720933060</p>
                       
                         </Col>
                        <Col>
                        
                        <a href=""><FaBeer/></a><label>Email</label>
                         <p>nayamat0911@gmail.com</p>
                         
                         </Col>
                    </Row>
                    <div className="contact_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.4286765852103!2d91.7960593857308!3d22.36439873704185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8fc3e3e0e33%3A0xe87764edff889e03!2sHazi%20Abdul%20Hamid%20Rd%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1621226273577!5m2!1sen!2sbd" width="420" height="380" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>                    </div>
                </div>
                
                <div className="contact_from">
           
                    {/* <h1>Plase Put Your Information</h1>
                    <label htmlFor="">Your Name</label>
                    <input type="text" action='' name="" id="" placeholder="Enter First Name" />
                    <input type="text" action='' name="" id="" placeholder="Enter Last Name" />
                    <input type="email" action='' name="" id="" placeholder="Your Email" />
                    <input type="text" action='' name="" id="" placeholder="Your Subject" />
                    <textarea rows='5' cols='20' placeholder="Type your text"></textarea> */}
                    
                </div>
            </div>
            
        
        </div>
    )
}

export default Contact
