import React from 'react';

class Documents extends React.Component {
  render() {
    return (
      <div className="works">
        <h1>Publications</h1>
        <div className="row">
          <p>Eadon, Yvonne. 2019. “<a href="https://escholarship.org/uc/item/7pv1s9p7">‘Useful Information Turned into Something Useless’: Archival Silences, Imagined Records, and Suspicion of Mediated Information in the JFK Assassination Collection.</a>” InterActions: UCLA Journal of Education and Information Studies 15 (2).</p>
          <p>Eadon, Yvonne M. “<a href={`${process.env.PUBLIC_URL}/assets/pdfs/Eadon2020EpistemicDisc.pdf`}>(Not) Part of the System: Resolving Epistemic Disconnect Through Archival Reference.</a>” KNOWLEDGE ORGANIZATION 47, no. 6 (2020): 441–60.</p>
          <p>Eadon, Yvonne Melisande. “<a href="https://doi.org/10.5210/spir.v2020i0.11206">ILLUMINATI(NG) THE SEARCH PROCESS: THEORIZING THE RESEARCH PRACTICES OF ‘ALTERNATIVE’ OR ‘CONTROVERSIAL’ RESEARCH.</a>” AoIR Selected Papers of Internet Research, October 5, 2020.</p>
        </div>
        
        <div className="row">
          <span className="hr"></span>
        </div>

      </div>
    );
  }
}

const Publications = () => {
   return(
    <Documents />
   )
}
 
export default Publications;