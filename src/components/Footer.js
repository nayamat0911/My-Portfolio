import React from 'react'
import '../Styles/Footer.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Footer() {
    return (
        <div className="foter_section ">
            
            <div className="footer_left">
                <div className="send_option">
                    <input type='text' placeholder="Send Email" />
                    <Button >Send</Button>
                    <div className="subscribe_option">
                        <Button >Subscribe Me</Button>
                    </div>
                </div>


            </div>
            <div className="important_link">
                <h3>Important Link</h3>
                    <Link to=''>W3 School</Link>
                    <Link to=''>Stack overfolw</Link>
                    <Link to=''>React Documentation</Link>
                    <Link to=''>Django Documetation</Link>
            </div>
        </div>
    )
}

export default Footer
