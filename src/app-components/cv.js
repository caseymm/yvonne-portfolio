import React from 'react';

class Work extends React.Component {
  render() {
    return (
      <div className="works">
        <h1>CV</h1>
        <div className="standalone-link"><a href="/portfolio/assets/pdfs/Yvonne_Eadon_CV__2021.pdf">Link to CV</a></div>
        <iframe className="cv" src="/portfolio/assets/pdfs/Yvonne_Eadon_CV__2021.pdf" width="100%" height="650px"></iframe>
      </div>
    );
  }
}

const CV = () => {
   return(
    <Work />
   )
}
 
export default CV;