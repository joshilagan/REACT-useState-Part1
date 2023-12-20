import './App.css';
import { useState } from 'react';

function App() {
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);

  return (

    <div className="App">
        <section className='leftsyd'>
          <div className='leftCard1' onClick={()=>{
          setShowCard1(!showCard1)
          setShowCard2(false)
          setShowCard3(false)
        } }>
            <h1>Sr. React Front-end Developer</h1>
            <p className='leftcard__p'>ABC Company</p>
            <p className='leftcard__p'>Massachusetts</p>
            <p className='leftcard__p'>Php150,000 - Php200,000 per month</p>
            <ul className='list'>
              <li> Flexible working hours</li>
              <li> Work from home</li>
              <li> High pay, high growth opportunity</li>
            </ul>
          </div>

          <div className='leftCard1' onClick={()=>{
          setShowCard1(false)
          setShowCard2(!showCard2)
          setShowCard3(false)
        } }>
            <h1>Full Stack Developer</h1>
            <p className='leftcard__p'>Techno Company</p>
            <p className='leftcard__p'>Portugal</p>
            <p className='leftcard__p'>Php100,000 - Php120,000 per month</p>
            <ul className='list'>
              <li> Flexible working hours</li>
              <li> Work from home</li>
              <li> High pay, high growth opportunity</li>
            </ul>
          </div>

          <div className='leftCard1' onClick={()=>{
          setShowCard1(false)
          setShowCard2(false)
          setShowCard3(!showCard3)
        } }>
            <h1>UI/UX Designer</h1>
            <p className='leftcard__p'>Hi-tech Company</p>
            <p className='leftcard__p'>Singapore</p>
            <p className='leftcard__p'>Php60,000 - Php70,000 per month</p>
            <ul className='list'>
              <li> Flexible working hours</li>
              <li> Work from home</li>
              <li> High pay, high growth opportunity</li>
            </ul>
          </div>
        </section>

        <section className='rightsyd'>
          {/* use '&&' conditional statement to render the div about job detail
          whenever the showCard1 variable is true */}
          {showCard1 && <div className='rightCard desc1'>
                <h1 className='rightCard1__h1'>Sr. React Front-end Developer</h1>
                <p>ABC Company</p>
                <p>Massachusetts</p>
                <p>Php150,000 - Php200,000 per month</p>
                <div className='card__button'>
                  <button>Quick Apply</button>
                  <button>Save</button>
                </div>
                <p>We are looking for a Sr. React Developer/Sr. Front-end Developer to design and develop an enterprise application for hospital shift management system with SaaS architecture. </p>
                <h3>Desired Experience</h3>
                <ul className='list'>
                  <li> Have built frond-end of application from scratch independently, or have led development group.
                  </li>
                  <li>  3+ Year of hands-on experience of React JS, Typescript, HTML5+CSS3.</li>
                  <li> Excellent skills with front-end development. Proficient using React JS, Typescript, HTML5+CSS3, JavaScript</li>
                </ul>
                <h3>Education Qualifications</h3>
                <p>Bachelor&#39;s in Computer Science, Computer Engineering, Software or equivalent</p>
                <h3>Job Location</h3>
                <p>Work full time from home in Philippine, mostly from 9am to 5pm</p>
            </div>}
            
            {showCard2 && <div className='rightCard desc2'>
                <h1 className='rightCard1__h1'>Full Stack Developer</h1>
                <p>Techno Company</p>
                <p>Portugal</p>
                <p>Php100,000 - Php120,000 per month</p>
                <div className='card__button'>
                  <button>Quick Apply</button>
                  <button>Save</button>
                </div>
                
                <h3>Qualifications:</h3>
                <ul className='list'>
                  <li> Bachelor's degree in any field of study. IT/CS Graduate is a plus.</li>
                  <li> Minimum of 4 to 7 years professional work experience for any relevant role as a Full Stack Developer or Net Developer.</li>
                  <li> Front End Development: HTML, CSS, Javascripts and React JS</li>
                  <li> Back End Development: C#, ASP.NET, and Node JS</li>
                  <li> Familiarity with relational databases.</li>
                  <li>Understanding with API's &#40;REST or SOAP API&#41; and Repositories &#40;Git/Github&#41;</li>
                  <li> Framework: MVC or any NET Framework</li>
                </ul>
                <h3>Additional Benefits</h3>
                <ul>
                  <li>Work From Home Arrangement</li>
                  <li>Negotiable salary base on previous experiences/salary and skills.</li>
                  <li>Project Allowances or Project Completion Incentives.</li>
                  <li>Health Insurance &#40;HMO&#41; - since day 1</li>
                  <li>Career Development Plan &#40;Certification, Seminar, Training, or Workshop&#41;</li>
                  <li>Overtime, Night Differential, and Holiday pay.</li>
                  <li>Additional benefits may grant after final interview &#40;negotiation during final interview&#41;</li>
                </ul>
            </div>}
            
            {showCard3 && <div className='rightCard desc3'>
                <h1 className='rightCard1__h1'>UI/UX Designer</h1>
                <p>ABC Company</p>
                <p>Massachusetts</p>
                <p>Php60,000 - Php70,000 per month</p>
                <div className='card__button'>
                  <button>Quick Apply</button>
                  <button>Save</button>
                </div>
                
                <h3>Job Duties and Responsibilities</h3>
                <ul>
                  <li>Plan and implement new designs </li>
                  <li>Optimize existing user interface designs</li>
                  <li>Test for intuitivity and experience</li>
                  <li>Communicate with Directors, Project Managers and Engineers to understand the goals and objectives</li>
                  <li>Develop technical and business requirements and always strive to deliver intuitive and user-centered solutions</li>
                  <li>Combine creativity with an awareness of the design elements</li>
                  <li>Create prototypes for new product ideas</li>
                  <li>Test new ideas before implementing </li>
                </ul>
                <h3>Job Specifications</h3>
                <ul>
                  <li>5 years of experience as an UI/UX Designer or similar role</li>
                  <li>UI design portfolio</li>
                  <li>3 years of experience  in designing for HTML & CSS &#40;a plus factor&#41;</li>
                  <li>Knowledge and Supervisory / Managerial Skills</li>
                  <li>Excellent written and oral communication skills</li>
                  <li>Knowledge of Figma and Adobe range of products including Photoshop, Illustrator, InDesign, Acrobat.</li>
                  <li>Possess strong knowledge of Usability Factors in Human Computer Interaction</li>               
                </ul>
            </div>}
            
        </section>
    </div>
  );
}

export default App;
