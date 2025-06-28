import React from 'react'




const ChemicalUsageCard =({chemicalName, usageValue}) =>{
  let progressColorClass = ""; //base progress class
  

  //condition
  if (usageValue < 10) {
    progressColorClass = "progress-error";
  } else if (usageValue >= 10 && usageValue <=20){
    progressColorClass = "progress-warning";
  } else if (usageValue === 100){
    progressColorClass = "progress-success"
  } else {
    progressColorClass = "progress-info";
  }

  const progressClasses = `progress w-50 ${progressColorClass}`;


  return(
    <>
    <button id='container' className='group w-[48%] mb-4 text-left py-2 px-3 pl-10 hover:text-company '>

    <ul>
      <li className='leading-none'>
        <h1>{chemicalName}</h1>
        <progress className={progressClasses} value={usageValue} max="100"></progress>
        <p>{usageValue}%</p>
      </li>
    
    </ul>


    </button>
    </>
  )



    };


    const ChemicalRadialProgress = ({totalChemicalStorage}) => {
      let progressColorClass = "";

      if (totalChemicalStorage < 10) {
    progressColorClass = "text-red-400";
  } else if (totalChemicalStorage >= 10 && totalChemicalStorage <=20){
    progressColorClass = "text-amber-400";
  } else if (totalChemicalStorage === 100){
    progressColorClass = "text-emerald-400"
  } else {
    progressColorClass = "text-sky-400";
  }

  const radialProgressClasses = `radial-progress ${progressColorClass}`;

  return (
    <>
    <div className= {radialProgressClasses}
  style={{ "--value": totalChemicalStorage, "--size": "10rem", "--thickness": "1.5rem" } /* as React.CSSProperties */ } 
  aria-valuenow={totalChemicalStorage} role="progressbar">{totalChemicalStorage}%</div>
    </>
  )
    };






function ChemicalUsage() {
  return (
    <div className='flex items-center'>
<div className='flex flex-wrap justify-between gap-x-6 w-full'>

<ChemicalUsageCard chemicalName="Fipronil" usageValue={5}/>
<ChemicalUsageCard chemicalName="Cypermethrin" usageValue={15}/>
<ChemicalUsageCard chemicalName="Imidaclopcrid" usageValue={40}/>

<ChemicalUsageCard chemicalName="Boric Acid" usageValue={100}/>



</div>
<div className='mr-20 text-center'>
<ChemicalRadialProgress totalChemicalStorage={59} />
<h1 className='text-md font-bold pt-5 text-gray-700'>Total Chemical Stock</h1>

</div>
</div>
  )
}

export default ChemicalUsage