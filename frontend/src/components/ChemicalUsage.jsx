import React from 'react'




const ChemicalUsageCard ({}) =>(
  <div>
    <button id="list-container" className='group w-full text-left py-2 px-3 hover:text-company'>

    <ul>
      <li></li>
    </ul>
      

    </button>





  </div>  
);






function ChemicalUsage() {
  return (
    <div>
<progress className="progress progress-info w-56" value={0} max="100"></progress>
<progress className="progress progress-info w-56" value="10" max="100"></progress>
<progress className="progress progress-info w-56" value="40" max="100"></progress>
<progress className="progress progress-info w-56" value="70" max="100"></progress>
<progress className="progress progress-info w-56" value="100" max="100"></progress>

    </div>
  )
}

export default ChemicalUsage