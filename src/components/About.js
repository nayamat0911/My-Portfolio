import React from 'react'
import '../Styles/About.css'

function About() {
    return (
        <div className="about_page pad_all_sec">
            <div className="about_me">
                <h1 className='all_sec_title_1'>About Me</h1>
                <h2 className="all_sec_sub_title_1">An Excelent Creativity</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur molestiae odio impedit rerum delectus eligendi eaque, mollitia quod iure?</p>
            </div>
            <div className="about_skill">
                <h1 className="all_sec_title_1">Developing Skill</h1>
                <div className="progress_bar">
                    <label for="file">Python </label>
                    <progress className="progressbar_item" id="file" value="70" max="100"> 70% </progress>
                </div>
                <div className="progress_bar">
                    <label for="file">MySQL </label>
                    <progress className="progressbar_item" id="file" value="60" max="100"> 60% </progress>
                </div>
                <div className="progress_bar">
                    <label for="file">Django </label>
                    <progress className="progressbar_item" id="file" value="80" max="100"> 80% </progress>
                </div>
                <div className="progress_bar js">
                    <label for="file" >JavaScript</label>
                    <progress className="progressbar_item" id="file" value="60" max="100"> 60% </progress>
                </div>
                <div className="progress_bar">
                    <label for="file">React js </label>
                    <progress className="progressbar_item" id="file" value="80" max="100"> 80% </progress>
                </div>
                <div className="progress_bar">
                    <label for="file">HTML5</label>
                    <progress className="progressbar_item" id="file" value="90" max="100"> 90% </progress>
                </div>
                <div className="progress_bar">
                    <label for="file">CSS3 ... </label>
                    <progress className="progressbar_item" id="file" value="90" max="100"> 90% </progress>
                </div>
                <div className="progress_bar js">
                    <label for="file">Bootstrap</label>
                    <progress className="progressbar_item" id="file" value="90" max="100"> 90% </progress>
                </div>
                
                
                
            </div>
        </div>
        
    )
}

export default About
