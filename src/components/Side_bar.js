import React from 'react'
import '../Styles/SideBar.css'
import profileImage from'../img/profile.jpg'
import { FaFacebook, 
        FaInstagram, 
        FaLinkedin, 
        FaTwitter, } from 'react-icons/fa';

function Side_bar() {
    return (
        <div className="side_content">
            <div className="pro_img">
                <img src={profileImage} alt=" Profile Image" />
            </div>
            <h3>Nayamat Ullah</h3>
            <h4>Full Stack Web Developer</h4>
            <h5>Expart React & Django</h5>
            <div className="socil_icn">
                <ul className="socail_icons_items">
                    <li className="socail_item">
                        <a href=""><FaFacebook/></a>
                    </li>
                    <li className="socail_item">
                        <a href=""><FaInstagram/></a>
                    </li>
                    <li className="socail_item">
                        <a href=""><FaLinkedin/></a>
                    </li>
                    <li className="socail_item">
                        <a href=""><FaTwitter/></a>
                    </li>
                </ul>
            </div>
            <p className="copy_right"><span>&#169; </span>By <small>nayamat'21</small> </p>
        </div>
    )
}

export default Side_bar
