import { useState } from 'react';
import img from '/public/img/user1.png'
import './About.css'
const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabname) => {
    setActiveTab(tabname);
  };
  return (
    <div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={img} alt="" />
            </div>

            <div className="about-col-2 bg-slate-900 rounded-lg py-5 px-5">
              <h1 className="sub-title">About Me</h1>
              <p>
                MERN Stack Developer with expertise in creating dynamic and responsive web applications. Proficient in JavaScript, React, Node.js, and MongoDB. Strong problem-solving skills and a passion for delivering high-quality code. Dedicated to continuous learning and staying updated with the latest industry trends.
              </p>
              <div className="tab-titles">
                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>
                  Skills
                </p>
                <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => openTab('experience')}>
                  Experience
                </p>
                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>
                  Education
                </p>
              </div>
              <div className={`tab-container ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li>
                    <span>Font-end Developer</span>
                    <br />
                    Designing Font-end Website Interfaces
                  </li>
                  <li>
                    <span>Web Development</span>
                    <br />
                    Web app Development
                  </li>
                  <li>
                    <span>Back-End Developer</span>
                    <br />
                    Designing Full-Stack Using MERN Stack.
                  </li>
                </ul>
              </div>
              <div className={`tab-container ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                <ul>
                  <li>
                    <span>2023 August-October</span>
                    <br />
                    Letter of Recommendation (From Programming Hero )
                    <br />● 2 Month Team Project With Github Collaboration .

                  </li>
                  <li>
                    <span>2023 January-July</span>
                    <br />
                    Complete Web Development (From Programming Hero )
                  </li>
                  
                </ul>
              </div>
              <div className={`tab-container ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                <ul>
                  <li>
                    <span>2022-2026</span>
                    <br />
                    Studying BBA Honors
                  </li>
                  <li>
                    <span>2021</span>
                    <br />
                    Completed HSC Degree
                  </li>
                  <li>
                    <span>2019</span>
                    <br />
                    Completed SSC Degree
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;