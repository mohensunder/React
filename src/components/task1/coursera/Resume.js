import React from "react";
import'./Resume.css';
import image from './kms.jpeg'
import imge from './line.jpg'
export function Sample(){
    return(
       <>
       <table>
        <tr>
          <td>
            <figure>
              <img src={image}/>
            <figcaption>mohensunder</figcaption>
            </figure>
          </td>
        </tr>
      </table>
        <dl>
          <dt>"Personal Information"</dt>
          <dd>Gender         :male</dd>
          <dd>DOB            :05-04-2001</dd>
          <dd>Address        :coimbatore</dd> 
          <dd>Mobile         :987654321</dd>
          <dd>Matrial status :single</dd>
          <img src={imge} className="mr"/>
        </dl>
       <section>
         <h4>CAREER OBJECTIVE</h4>
        
        <p>
           <pre>   
             To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction 
             and self development and help me achieve organizational as well as personal goals. To integrate my knowledge
             & utilizing my technical & analytical skills to explore the future growth of the organization  
           </pre>
        </p>
              
          <img src={imge} className="mr"/> 
          <h3>Skills</h3>  
          <ol type="1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ol>
          <h3>Eduction details</h3>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Course</th>
                  <th>Institution</th>t
                  <th>Board/University</th>
                  <th>Year of Passing</th>
                  <th>Percentage</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>SSLC</td>
                  <td>Angappa Matric Hr. Sec School Coimbatore</td>
                  <td>State Board</td>
                  <td>2017</td>
                  <td>74%</td>
                </tr>
              
                <tr>
                  <td>2</td>
                  <td>HSC</td>
                  <td>Angappa Matric Hr. Sec School Coimbatore</td>
                  <td>State Board</td>
                  <td>2019</td>
                  <td>87%</td>
                </tr>
              
                <tr>
                  <td>3</td>
                  <td>BCA</td>
                  <td>KG College of Arts and Science College,Coimbatore</td>
                  <td>Bharathiar University</td>
                  <td>2022</td>
                  <td>54%</td>
                </tr>
              </tbody>
            </table>
          </section> 
          <section name="project">
            <h3>Projects</h3>
            <details>
              <summary><a href="https://github.com/"target="_blank">Project-3</a></summary>
              <dl>
                <dt>Title</dt>
                <dd>Updating fintechnews.com (Fintech News Inc.) Backend Developer</dd>
                <dt>Duration</dt>
                <dd>Three months</dd>
                <dt>Technologies Used:</dt>
                <dd>
                  <ol type="1">
                    <li>Python</li>
                    <li>PHP</li>
                    <li>Ruby</li>
                    <li>JavaScript</li>
                  </ol>
                </dd>
                <dt>Description</dt>
                <dd>
                  <ul type="disc">
                    <li>Created a content management system serving as a client interface that reduced download times by 30%.</li>
                    <li>Developed new admin panel, which improved internal operating efficiency by over 40%.</li>
                    <li>Created comprehensive testing regime using RSpec to ensure bug-free code.</li>
                    <li>Rebuilt entire website with up to date technologies and frameworks.</li>
                  </ul>
                </dd>
              </dl>
            </details>
            <details>
              <summary><a href="https://github.com/"target="_parent">Project-3</a></summary>
              <dl>
                <dt>Title</dt>
                <dd>Updating fintechnews.com (Fintech News Inc.) Backend Developer</dd>
                <dt>Duration</dt>
                <dd>Three months</dd>
                <dt>Technologies Used:</dt>
                <dd>
                  <ol type="1">
                    <li>Python</li>
                    <li>PHP</li>
                    <li>Ruby</li>
                    <li>JavaScript</li>
                  </ol>
                </dd>
                <dt>Description</dt>
                <dd>
                  <ul type="disc">
                    <li>Created a content management system serving as a client interface that reduced download times by
                      30%.</li>
                    <li>Developed new admin panel, which improved internal operating efficiency by over 40%.</li>
                    <li>Created comprehensive testing regime using RSpec to ensure bug-free code.</li>
                    <li>Rebuilt entire website with up to date technologies and frameworks.</li>
                  </ul>
                </dd>
              </dl>
            </details>
            <details>
              <summary><a href="https://github.com/"target="_parent">Project-3</a></summary>
              <dl>
                <dt>Title</dt>
                <dd>Updating fintechnews.com (Fintech News Inc.) Backend Developer</dd>
                <dt>Duration</dt>
                <dd>Three months</dd>
                <dt>Technologies Used:</dt>
                <dd>
                  <ol type="1">
                    <li>Python</li>
                    <li>PHP</li>
                    <li>Ruby</li>
                    <li>JavaScript</li>
                  </ol>
                </dd>
                <dt>Description</dt>
                <dd>
                  <ul type="disc">
                    <li>Created a content management system serving as a client interface that reduced download times by
                      30%.</li>
                    <li>Developed new admin panel, which improved internal operating efficiency by over 40%.</li>
                    <li>Created comprehensive testing regime using RSpec to ensure bug-free code.</li>
                    <li>Rebuilt entire website with up to date technologies and frameworks.</li>
                  </ul>
                </dd>
              </dl>
            </details>
          </section>
          <section id="languages_know">
            <h3>Languages Known</h3>
          <dl>
            <dt>
            <dd>Tamil</dd>
            <dd>English</dd>
            <dd>Hindi</dd>
            </dt>
          </dl>   
        </section>  
       </> 
    );
}