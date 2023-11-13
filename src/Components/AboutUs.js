import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import './css/UI.css';
import PersonObject from '../Classes/PersonObject';
import AboutCard from './AboutCard.js';

import sorenIMG from './images/ABOUT_SOREN.jpeg';
import drewIMG from './images/ABOUT_DREW.jpeg';
import annaIMG from './images/ABOUT_ANNA.jpeg';
import miyaIMG from './images/ABOUT_ANNA.jpeg';

let soren = new PersonObject(sorenIMG, "Soren Fliegel", "Third-year CS major from Chicago, Illinois");
let drew = new PersonObject(drewIMG, "Drew Kim", "Third-year SE major from the Bay Area, CA");
let anna = new PersonObject(annaIMG, "Anna Makarewicz", "Fourth-year CS major from Sacramento, CA");
let miya = new PersonObject(miyaIMG, "Miya Reese", "Fourth-year CS major from Kaua'i, Hawai'i");

const teamMembers = [anna, drew, miya, soren]


function AboutUsPage() {
  return (
    <div>
      <Row>
        <h1 className="title"> Meet the Team </h1>
      </Row>
      <div style={{ height: '2vh'}} ></div>
      <div className="row no-gutters">
        <Row>
          <h5 className="subtitle">Chillato Explorato - Students at Cal Poly, SLO</h5>
        </Row>
        <div style={{ height: '5vh'}} ></div>
        <div className="d-flex justify-content-evenly">
          <Row>
            {teamMembers.map((person) => (
              <Col key={person.name}>
                <div>
                  <AboutCard person={person} srcImg={person.imgSrc} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

// the page
// function AboutUsPage() 
// { 
//   teamMembers.map((person) =>
//     <Col key={person.name}>
//       <div>
//         <AboutCard person={person} srcImg={person.srcImg}/>
//       </div>
//     </Col>
//   );

//   // display on page
//   return (  
//     <div>
//       <Row>
//         <h1 className="title"> Meet the Team </h1>
//       </Row>
//       <div className="row no-gutters">
//         <Row>
//           <h5 className="subtitle">Chillato Explorato - Students at Cal Poly, SLO</h5>
//         </Row>
//         <div className="d-flex justify-content-evenly">
//           <Row>{teamMembers}</Row>
//         </div>
//       </div>
//     </div>
//   );
// }
  
export default AboutUsPage;
  