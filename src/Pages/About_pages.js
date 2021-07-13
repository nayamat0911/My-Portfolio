import React, { Component } from 'react'


export class About_pages extends Component {
    render() {
        return (
            <>
                <div className="about_section">
                    <div className="about_top">
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                        <div className="tiitle">
                            <h3>Ambout Me</h3>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam enim amet maxime expedita non exercitationem, quam facere recusandae suscipit veritatis.</p>
                        </div>
                    </div>
                    <div className="about_middle">
                        <div className="about_skill">
                            <h4>My Skill</h4>
                            <label for="">HTML</label><label for="">CSS</label><label for="">SASS</label>
                        </div>
                        
                    </div>
                </div>
                
            </>
        )
    }
}

export default About_pages
