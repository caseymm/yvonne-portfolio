import React from 'react';

class Details extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="photo" style={{ backgroundImage: 'url("/portfolio/assets/yvonne.png")' }}></div>
        <div className="text">
          <p>Yvonne M. Eadon (she/her), MLIS, is a doctoral candidate in Information Studies at the University of California, Los Angeles.</p> 
          <p>Her research exists at the intersection of conspiracy theory scholarship, information seeking and behavior, online misinformation/ 
          disinformation, and archival studies.</p>
          <p>Her most recent publication, "(Not) Part of the System: Resolving Epistemic Disconnect 
          Through Archival Reference," was published in a special issue of Knowledge Organization devoted to Politics, Culture, and the 
          Organization of Knowledge.</p>
          <p className="subhed">Contact:</p>
          <span className="icons">
            <a href="mailto:ymeadon@gmail.com">ymeadon@gmail.com</a>
            <a href="https://twitter.com/yvonnemelisande">@yvonnemelisande</a>
          </span>
        </div>
      </div>
    );
  }
}

const About = () => {
   return(
    <Details />
   )
}
 
export default About;